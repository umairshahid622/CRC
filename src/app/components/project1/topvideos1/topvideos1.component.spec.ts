import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topvideos1Component } from './topvideos1.component';

describe('Topvideos1Component', () => {
  let component: Topvideos1Component;
  let fixture: ComponentFixture<Topvideos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topvideos1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topvideos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
