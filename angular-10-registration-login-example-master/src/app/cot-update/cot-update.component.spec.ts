import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotUpdateComponent } from './cot-update.component';

describe('CotUpdateComponent', () => {
  let component: CotUpdateComponent;
  let fixture: ComponentFixture<CotUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
