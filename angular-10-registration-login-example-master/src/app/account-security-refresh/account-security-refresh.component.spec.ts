import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityRefreshComponent } from './account-security-refresh.component';

describe('AccountSecurityRefreshComponent', () => {
  let component: AccountSecurityRefreshComponent;
  let fixture: ComponentFixture<AccountSecurityRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSecurityRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
