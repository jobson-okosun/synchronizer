import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { finalize } from 'rxjs';
import DataService from '../../../services/data';
import { Metadata } from '../../../models/types';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  imports: [TableModule, PaginatorModule, DialogModule, ReactiveFormsModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export default class View {
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  selectedFile = signal<any | File>(null)
  isLoading = signal(false)
  showUploadAttachmentDialog: boolean = false
  showPushDialog: boolean = false;

  examId = input<string | undefined>();

  participantsStatsReq = this._dataService.fetchExamParticipantsStats(this.examId)
  participantsStats = computed(() => this.participantsStatsReq.hasValue() ? this.participantsStatsReq.value() : null)
  selectedSession = computed(() => this._dataService.selectedSession())

  size = signal(200)
  page = signal(1)
  participantsReq = this._dataService.fetchParticipants(this.size, this.page, this.examId)
  participants = computed(() => this.participantsReq.hasValue() ? this.participantsReq.value() : ({ exam_id: '', exam_name: '',  participants: { items: [], metadata: new Metadata() }}))

  reloadPage = effect(() => {
    if (this.selectedSession()) {
      this.participantsStatsReq.reload()
      this.participantsReq.reload()
    }
  })

  pushForm = new FormGroup({
    ipAddress: new FormControl('', [Validators.required, Validators.pattern(/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/)]),
    protocol: new FormControl(null, Validators.required)
  });

  pushToExamAlpha(event: Event) {
    if (this.pushForm.invalid) {
      this.pushForm.markAllAsTouched();
      return;
    }

    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    const payload = { ...this.pushForm.getRawValue() } as any

    this._dataService.pushParticipantToExamAlpha(payload, this.examId()!)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: any) => {
          this._toast.success(res.message ?? 'Participants uploaded successfully!');
          this.showPushDialog = false;
          this.selectedFile.set(null);
          this.participantsReq.reload()
        },
        error: (err: HttpErrorResponse) => {
          const message = err.error?.message ?? 'Sorry! Unable to complete task';
          this._toast.error(message);
        }
      });
  }

  ImportParticipants(event: Event) {
    if (!this.selectedFile()) {
      this._toast.error('Please select a file to upload');
      return;
    }

    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    const formData = new FormData();
    formData.append('file', this.selectedFile());

    this._dataService.importParticipants(formData)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: any) => {
          this._toast.success('Participants uploaded successfully!');
          this.showUploadAttachmentDialog = false;
          this.selectedFile.set(null);
          this.participantsReq.reload()
        },
        error: (err: HttpErrorResponse) => {
          const message = err.error?.message ?? 'Sorry! Unable to complete task';
          this._toast.error(message);
        }
      });
  }


  onFileSelected(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    if (!inputEl.files?.length) return;

    const file = inputEl.files[0];
    const maxSizeMB = 10;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    const validMimeTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    const validExtensions = ['csv', 'xls', 'xlsx', 'png'];
    const extension = file.name.split('.').pop()?.toLowerCase();

    const isValidType = validMimeTypes.includes(file.type) || validExtensions.includes(extension || '');
    const isValidSize = file.size <= maxSizeBytes;


    if (!isValidType) {
      this._toast.error('File type is not supported')
      this.resetFile(inputEl)
      return
    }

    if (!isValidSize) {
      this._toast.error('File size is too large')
      this.resetFile(inputEl)
      return
    }

    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile.set(input.files[0]);
    }
  }

  resetFile(inputEl: HTMLInputElement) {
    inputEl.value = ''
    this.selectedFile.set(null)
  }

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }
}
