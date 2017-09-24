import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookBasicComponent } from './cook-basic.component';

describe('CookBasicComponent', () => {
  let component: CookBasicComponent;
  let fixture: ComponentFixture<CookBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
