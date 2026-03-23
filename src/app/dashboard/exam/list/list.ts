import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PopoverModule } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { Metadata } from '../../../models/types';
import DataService from '../../../services/data';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [TableModule, PaginatorModule, ReactiveFormsModule, DialogModule, PopoverModule, RouterLink, DatePipe, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  showSyncModal = signal(false)

  size = signal(20)
  page = signal(1)
  examsReq = this._dataService.fetchExams(this.size, this.page)
  exams = computed(() => this.examsReq.hasValue() ? this.examsReq.value() : ({ items: [], metadata: new Metadata() }))

  syncExamsTrigger = signal(false)
  syncExamsReq = this._dataService.pullExamsForSync(this.syncExamsTrigger)
  syncExams = computed(() => this.syncExamsReq.hasValue() ? this.syncExamsReq.value() : ({ data: [] }))

  openSyncExamModal() {
    this.showSyncModal.set(true)

    if(!this.syncExamsTrigger()) {
      this.syncExamsTrigger.set(true)
    }

    this.syncExamsReq.reload()
  }

  syncExam(examId: string, event: Event) {
    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    this._dataService.syncExam(examId)
      .pipe(
        this._toast.observe({
          loading: 'Synchronizing...',
          success: 'Exam synchronized successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err?.error?.message ?? 'Failed to sync subject';
          }
        }),
        finalize(() => btn.disabled = false)
      )
      .subscribe({
        next: () => {
          this.syncExamsReq.reload()
          this.examsReq.reload()
        }
      })
  }

  publishExam(examId: string, event: Event) {
    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    this._dataService.publishExam(examId)
      .pipe(
        this._toast.observe({
          loading: 'Publishing...',
          success: 'Exam published successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err?.error?.message ?? 'Failed to publish exam';
          }
        }),
        finalize(() => btn.disabled = false)
      )
      .subscribe({
        next: () => {
          this.examsReq.reload()
        }
      })
  }

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }
}
