import { Component, computed, inject, model, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Popover } from 'primeng/popover';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import DataService from '../../services/data';
import { DatePipe } from '@angular/common';
import { Metadata } from '../../models/types';
import { HotToastService } from '@ngxpert/hot-toast';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-subjects',
  imports: [TableModule, DialogModule, PaginatorModule, Popover, ReactiveFormsModule, DatePipe],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css',
})
export default class Subjects {
  private confirmationService = inject(ConfirmationService);
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  showSyncModal = model(false)
  size = signal(20)
  page = signal(1)
  subjectsReq = this._dataService.fetchSubjects(this.size, this.page)
  subjects = computed(() => this.subjectsReq.hasValue() ? this.subjectsReq.value() : ({ items: [], metadata: new Metadata() }))

  syncSubjectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    s_id: new FormControl('', Validators.required)
  })

  confirmSubjectDelete(subjectId: string): void {
    this.confirmationService.confirm({
      header: 'Delete subject',
      message: 'Are you sure you want to delete this subject?',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => this.deleteSubject(subjectId),
    });
  }

  deleteSubject(subjectId: string) {
    this._dataService.deleteSubject(subjectId)
      .pipe(
        this._toast.observe({
          loading: 'Deleting...',
          success: 'Subject deleted successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err?.error?.message ?? 'Failed to delete subject';
          }
        })
      )
      .subscribe({
        next: () => this.subjectsReq.reload()
      })
  }

  syncSubject(event: Event) {
    const btn = event.target as HTMLButtonElement
    btn.disabled =  true

    const payload = this.syncSubjectForm.value as any
    payload.s_id = +payload.s_id

    this._dataService.syncSubject(payload)
      .pipe(
        this._toast.observe({
          loading: 'Synchronizing...',
          success: 'Subject synchronized successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err?.error?.message ?? 'Failed to sync subject';
          }
        }),
        finalize(() => btn.disabled = false)
      )
      .subscribe({
        next: () => this.subjectsReq.reload()
      })
  }

  setSubjectCode(event: Event) {
    const value = (event.target as HTMLSelectElement).value
    const subject = this.subjects().items.find( item => item.name == value)

    if(!subject) {
      return 
    }

    this.syncSubjectForm.get('s_id')?.setValue(subject.s_id.toString())
  }

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }
}
