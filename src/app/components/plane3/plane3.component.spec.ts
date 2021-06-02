import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plane3Component } from './plane3.component';

describe('Plane3Component', () => {
  let component: Plane3Component;
  let fixture: ComponentFixture<Plane3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plane3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plane3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
