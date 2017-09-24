import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookDetailsComponent } from './cook-details.component';

describe('CookDetailsComponent', () => {
  let component: CookDetailsComponent;
  let fixture: ComponentFixture<CookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
