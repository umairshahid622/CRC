import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hashtag1Component } from './hashtag1.component';

describe('Hashtag1Component', () => {
  let component: Hashtag1Component;
  let fixture: ComponentFixture<Hashtag1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hashtag1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hashtag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
