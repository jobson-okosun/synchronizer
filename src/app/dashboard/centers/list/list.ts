import { Component, computed, inject, signal } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PopoverModule } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { RouterLink } from "@angular/router";
import { Metadata } from '../../../models/types';
import DataService from '../../../services/data';
import { DatePipe } from '@angular/common';
import { HotToastService } from '@ngxpert/hot-toast';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  imports: [TableModule, PaginatorModule, PopoverModule, DatePipe, RouterLink],
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

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }
}
