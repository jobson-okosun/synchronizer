import { Component, computed } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { Popover } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list',
  imports: [TableModule, PaginatorModule, Popover, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {
  exams = computed(() => [
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
  ])

}
