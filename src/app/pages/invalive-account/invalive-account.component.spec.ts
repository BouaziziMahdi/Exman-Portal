import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvaliveAccountComponent } from './invalive-account.component';

describe('InvaliveAccountComponent', () => {
  let component: InvaliveAccountComponent;
  let fixture: ComponentFixture<InvaliveAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvaliveAccountComponent]
    });
    fixture = TestBed.createComponent(InvaliveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
