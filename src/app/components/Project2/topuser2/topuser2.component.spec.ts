import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topuser2Component } from './topuser2.component';

describe('Topuser2Component', () => {
  let component: Topuser2Component;
  let fixture: ComponentFixture<Topuser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topuser2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topuser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
