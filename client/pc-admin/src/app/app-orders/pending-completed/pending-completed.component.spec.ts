import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCompletedComponent } from './pending-completed.component';

describe('PendingCompletedComponent', () => {
  let component: PendingCompletedComponent;
  let fixture: ComponentFixture<PendingCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
