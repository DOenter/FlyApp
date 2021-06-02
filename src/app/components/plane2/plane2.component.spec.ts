import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plane2Component } from './plane2.component';

describe('Plane2Component', () => {
  let component: Plane2Component;
  let fixture: ComponentFixture<Plane2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plane2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plane2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
