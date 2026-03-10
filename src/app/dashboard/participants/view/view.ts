import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { finalize } from 'rxjs';
import DataService from '../../../services/data';

@Component({
  selector: 'app-view',
  imports: [TableModule, PaginatorModule, DialogModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export default class View {
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  selectedFile = signal<any | File>(null)
  isLoading = signal(false)
  showUploadAttachmentDialog: boolean = false
  centers = computed(() => [
    { name: '2025 june exam',  no: 5, subjects: 'ENG,PHY', gender:'Male', phone: '070345433', email: 'joedow@email.com' },
    { name: '2025 june exam',  no: 5, subjects: 'ENG,PHY', gender:'Male', phone: '070345433', email: 'joedow@email.com' },
    { name: '2025 june exam',  no: 5, subjects: 'ENG,PHY', gender:'Male', phone: '070345433', email: 'joedow@email.com' },
    { name: '2025 june exam',  no: 5, subjects: 'ENG,PHY', gender:'Male', phone: '070345433', email: 'joedow@email.com' },
  ])

  ImportCenters() {
    if (!this.selectedFile()) {
      this._toast.error('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile());

    this.isLoading.set(true);

    // this._dataService.importCenters(formData)
    //   .pipe(finalize(() => this.isLoading.set(false)))
    //   .subscribe({
    //     next: (res: any) => {
    //       this._toast.success('Centers uploaded successfully!');
    //       this.showUploadAttachmentDialog = false;
    //       this.selectedFile.set(null);
    //       this.centers.reload()
    //     },
    //     error: (err: HttpErrorResponse) => {
    //       const message = err.error?.error ?? 'Unable to upload file';
    //       this._toast.error(message);
    //     }
    //   });
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
}
