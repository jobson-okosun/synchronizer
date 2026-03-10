import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamYear } from './exam-year';

describe('ExamYear', () => {
  let component: ExamYear;
  let fixture: ComponentFixture<ExamYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamYear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamYear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
