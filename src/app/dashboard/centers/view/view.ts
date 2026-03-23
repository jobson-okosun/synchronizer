import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { finalize } from 'rxjs';
import DataService from '../../../services/data';
import { Center, Metadata } from '../../../models/types';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-view',
  imports: [TableModule, PaginatorModule, DialogModule, DatePipe, ReactiveFormsModule, PopoverModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export default class View {
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  selectedFile = signal<any | File>(null)
  selectedAdminFile = signal<any | File>(null)
  isLoading = signal(false)
  showUploadCentersModal: boolean = false
  showUploadCenterAdminModal: boolean = false
  showPushDialog: boolean = false;

  examId = input<string | undefined>();

  size = signal(100)
  page = signal(1)
  centersReq = this._dataService.fetchCenters(this.size, this.page, this.examId)
  centers = computed(() => this.centersReq.hasValue() ? this.centersReq.value() : ({ centres: { items: ([] as Center[]), metadata: new Metadata() }, exam_name: '' }))

  centersStatsReq = this._dataService.fetchExamCentersStats(this.examId)
  centersStats = computed(() => this.centersStatsReq.hasValue() ? this.centersStatsReq.value() : null)

  selectedSession = computed(() => this._dataService.selectedSession())
  reloadPage = effect(() => {
    if (this.selectedSession()) {
      this.centersStatsReq.reload()
      this.centersReq.reload()
    }
  })

  pushForm = new FormGroup({
    ip: new FormControl('', [Validators.required, Validators.pattern(/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/)]),
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

    this._dataService.pushCentersToExamAlpha(payload, this.examId()!)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: any) => {
          this._toast.success(res.message ?? 'Centers uploaded successfully!');
          this.showUploadCentersModal = false;
          this.selectedFile.set(null);
          this.centersReq.reload()
        },
        error: (err: HttpErrorResponse) => {
          const message = err.error?.message ?? 'Sorry! Unable to complete task';
          this._toast.error(message);
        }
      });
  }

  ImportCenters(event: Event) {
    if (!this.selectedFile()) {
      this._toast.error('Please select a file to upload');
      return;
    }

    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    const formData = new FormData();
    formData.append('file', this.selectedFile());

    this._dataService.importCenters(formData)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: any) => {
          this._toast.success('Centers uploaded successfully!');
          this.showUploadCentersModal = false;
          this.selectedFile.set(null);
          this.centersReq.reload()
        },
        error: (err: HttpErrorResponse) => {
          const message = err.error?.message ?? 'Sorry! Unable to complete task';
          this._toast.error(message);
        }
      });
  }

  ImportCenterAdmin(event: Event) {
    if (!this.selectedAdminFile()) {
      this._toast.error('Please select a file to upload');
      return;
    }

    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    const formData = new FormData();
    formData.append('file', this.selectedAdminFile());

    this._dataService.ImportCenterAdmin(formData)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: any) => {
          this._toast.success('Admins uploaded successfully!');
          this.showUploadCenterAdminModal = false;
          this.selectedAdminFile.set(null);
          this.centersReq.reload()
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
      this.selectedAdminFile.set(input.files[0]);
    }
  }

  exportCenterAdmins() {
    this._dataService.exportCenterAdmins(this.examId()!)
      .pipe(
        this._toast.observe({
          loading: 'Exporting...',
          success: (res: any) => res.message ?? 'uploaded successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err.error?.message ?? 'Sorry! Unable to complete task';
          }
        })
      )
      .subscribe();
  }

  resetFile(inputEl: HTMLInputElement) {
    inputEl.value = ''
    this.selectedFile.set(null)
    this.selectedAdminFile.set(null)
  }

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }
}
