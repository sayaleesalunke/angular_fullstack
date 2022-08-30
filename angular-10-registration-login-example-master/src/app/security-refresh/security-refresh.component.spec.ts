import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRefreshComponent } from './security-refresh.component';

describe('SecurityRefreshComponent', () => {
  let component: SecurityRefreshComponent;
  let fixture: ComponentFixture<SecurityRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
