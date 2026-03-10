import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { Popover } from 'primeng/popover';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-exam-year',
  imports: [TableModule, PaginatorModule, Popover, ReactiveFormsModule],
  templateUrl: './exam-year.html',
  styleUrl: './exam-year.css',
})
export default class ExamYear {
  private confirmationService = inject(ConfirmationService);
  years = computed(() => [
    { name: '2022', startdate: '12/12/2026', enddate: '12/12/2026',},
    { name: '2022', startdate: '12/12/2026', enddate: '12/12/2026',},
    { name: '2022', startdate: '12/12/2026', enddate: '12/12/2026',},
    { name: '2022', startdate: '12/12/2026', enddate: '12/12/2026',},
  ])

  confirmMakeYearCurrent(yearId: string): void {
    this.confirmationService.confirm({
      header: 'Make current year',
      message: 'Are you sure you want to set this year as the current year?',
      acceptLabel: 'Make current',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => this.makeYearCurrent(yearId),
    });
  }

  makeYearCurrent(yearId: string) { }
}
