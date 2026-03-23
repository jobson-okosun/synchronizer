import { Component, computed, inject, model, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Popover } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { Metadata } from '../../models/types';
import DataService from '../../services/data';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-exam-year',
  imports: [TableModule, PaginatorModule, Popover, ReactiveFormsModule, DialogModule],
  templateUrl: './exam-year.html',
  styleUrl: './exam-year.css',
})
export default class ExamYear {
  private confirmationService = inject(ConfirmationService);
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  showCreateYearModal = model(false)
  size = signal(20)
  page = signal(1)
  yearsReq = this._dataService.fetchSessions(this.size, this.page)
  years = computed(() => this.yearsReq.hasValue() ? this.yearsReq.value() : ({ items: [], metadata: new Metadata() }))

  createYearForm = new FormGroup({
    name: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
  })

  confirmMakeYearCurrent(yearId: string): void {
    this.confirmationService.confirm({
      header: 'Make current year',
      message: 'Are you sure you want to set this year as the current year?',
      acceptLabel: 'Make current',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => this.makeSessionCurrent(yearId),
    });
  }

  createYear(event: Event) {
    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    const payload = this.createYearForm.value as any
    payload.start_date = payload.start_date + ':00'
    payload.end_date = payload.end_date + ':00'

    this._dataService.createSession(payload)
      .pipe(
        this._toast.observe({
          loading: 'Please wait...',
          success: 'Session year created successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err?.error?.message ?? 'Failed to create session';
          }
        }),
        finalize(() => btn.disabled = false)
      )
      .subscribe({
        next: () => {
          this.yearsReq.reload()
          this.showCreateYearModal.set(false)
          this.createYearForm.reset()
        }
      })
  }

  makeSessionCurrent(yearId: string) {
    this._dataService.makeSessionCurrent(yearId)
      .pipe(
        this._toast.observe({
          loading: 'Please wait...',
          success: 'Session has been set as current successfully!',
          error: (e: unknown) => {
            const err = e as HttpErrorResponse;
            return err?.error?.message ?? 'Failed to set session for current';
          }
        })
      )
      .subscribe({
        next: () => this.yearsReq.reload()
      })
  }

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }
}
