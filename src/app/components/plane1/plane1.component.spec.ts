import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plane1Component } from './plane1.component';

describe('Plane1Component', () => {
  let component: Plane1Component;
  let fixture: ComponentFixture<Plane1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plane1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plane1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
