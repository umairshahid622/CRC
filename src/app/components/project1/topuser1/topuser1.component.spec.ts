import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topuser1Component } from './topuser1.component';

describe('Topuser1Component', () => {
  let component: Topuser1Component;
  let fixture: ComponentFixture<Topuser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topuser1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topuser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
