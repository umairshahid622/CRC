import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos2Component } from './videos2.component';

describe('Videos2Component', () => {
  let component: Videos2Component;
  let fixture: ComponentFixture<Videos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
