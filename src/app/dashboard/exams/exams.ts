import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-exams',
  imports: [TableModule, PaginatorModule, ReactiveFormsModule, DialogModule],
  templateUrl: './exams.html',
  styleUrl: './exams.css',
})
export default class Exams {
  showSyncModal = signal(false)
  exams = computed(() => [
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
    { name: '2025 june exam', startdate: '12/12/2026', enddate: '12/12/2026', status: 'published', biometric: true, type: 'Mock' },
  ])

  syncExam(examId: string, event: Event) {
    const btn = event.target as HTMLButtonElement
  }
}
