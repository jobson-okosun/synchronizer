import { Component, computed, inject, input } from '@angular/core';
import DataService from '../../../services/data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [DatePipe],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export default class View {
  private _dataService = inject(DataService)

  examId = input<string | undefined>();
  examReq = this._dataService.fetchExam(this.examId)
  exam = computed(() => this.examReq.hasValue() ? this.examReq.value() : null)
}
