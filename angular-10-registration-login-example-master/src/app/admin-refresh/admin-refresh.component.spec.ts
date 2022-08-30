import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRefreshComponent } from './admin-refresh.component';

describe('AdminRefreshComponent', () => {
  let component: AdminRefreshComponent;
  let fixture: ComponentFixture<AdminRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
