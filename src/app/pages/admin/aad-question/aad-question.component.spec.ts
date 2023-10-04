import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadQuestionComponent } from './aad-question.component';

describe('AadQuestionComponent', () => {
  let component: AadQuestionComponent;
  let fixture: ComponentFixture<AadQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AadQuestionComponent]
    });
    fixture = TestBed.createComponent(AadQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
