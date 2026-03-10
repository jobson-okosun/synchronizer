import { Component, computed, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { Popover } from 'primeng/popover';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-subjects',
  imports: [TableModule, DialogModule, PaginatorModule, Popover, ReactiveFormsModule],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css',
})
export default class Subjects {
  private confirmationService = inject(ConfirmationService);

  showSyncModal = signal(false)
  subjects = computed(() => [
    { name: 'Abuja', code: 123, id: 12 },
    { name: 'Abuja', code: 123, id: 12 },
    { name: 'Abuja', code: 123, id: 12 },
    { name: 'Abuja', code: 123, id: 12 }
  ])
  syncSubjectForm = new FormGroup({
    center: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
  })

  syncSubject(event: Event) {
    const btn = event.target as HTMLButtonElement
  }

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

  }
}
