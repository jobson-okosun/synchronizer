import { Component, computed, effect, inject, signal } from '@angular/core';
import DataService from '../../services/data';
import { HttpErrorResponse } from '@angular/common/http';
import { HotToastService } from '@ngxpert/hot-toast';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { finalize } from 'rxjs';
import { Metadata } from '../../models/types';
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-admins',
  imports: [TableModule, PaginatorModule],
  templateUrl: './admins.html',
  styleUrl: './admins.css',
})
export default class Admins {
  private _dataService = inject(DataService)
  private _toast = inject(HotToastService)

  size = signal(20)
  page = signal(1)
  selectedServer = computed(() => this._dataService.selectedServer())
  adminsReq = this._dataService.fetchOrgAdmins(this.size, this.page, this.selectedServer)
  admins = computed(() => this.adminsReq.hasValue() ? this.adminsReq.value() : ({ data: { items: [], metadata: new Metadata() } }))
  adminError = effect(() => {
    if (this.adminsReq.error()) {
      this._toast.error(this.adminsReq.error()?.message)
    }
  })

  onPageChange(event: PaginatorState) {
    this.size = this.size
    this.page.set((event.page ?? 0) + 1)
  }

  uploadOrgAdmin(event: Event) {
    const btn = event.target as HTMLButtonElement
    btn.disabled = true

    this._dataService.uploadOrgAdmin()
      .pipe(
        this._toast.observe({
          loading: 'Uploading....',
          success: (res: any) => res.message ?? 'uploaded successfully!',
          error: (e: unknown) => {
            console.log({ e })
            const err = e as HttpErrorResponse;
            return err.error?.message ?? 'Sorry! Unable to complete task';
          }
        }),
        finalize(() => btn.disabled = false)
      )
      .subscribe();
  }

  downloadAdmins(event: Event) {
    const btn = event.target as HTMLButtonElement
    btn.disabled = false

    this._dataService.downloadAdmins(100000000, 1)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res) => {
          const items = res.data.items;
          const csv = this.formatAdminsToCSV(items);
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

          saveAs(blob, 'ORG_ADMINS_' + Date.now())
        }
      })
  }

  formatAdminsToCSV(items: any[]): string {
    if (!items || !items.length) return '';

    const headers = [
      'ID',
      'First Name',
      'Last Name',
      'Username',
      'Email',
      'Password'
    ];

    const rows = items.map(item => [
      item.id,
      item.first_name,
      item.last_name,
      item.username,
      item.email,
      item.password
    ]);

    const csvContent = [
      headers.join(','), // header row
      ...rows.map(row =>
        row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')
      )
    ].join('\n');

    return csvContent;
  }
}
