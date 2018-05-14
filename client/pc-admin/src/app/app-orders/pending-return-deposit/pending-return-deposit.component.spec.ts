import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReturnDepositComponent } from './pending-return-deposit.component';

describe('PendingReturnDepositComponent', () => {
  let component: PendingReturnDepositComponent;
  let fixture: ComponentFixture<PendingReturnDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingReturnDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingReturnDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
