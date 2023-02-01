import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hashtag2Component } from './hashtag2.component';

describe('Hashtag2Component', () => {
  let component: Hashtag2Component;
  let fixture: ComponentFixture<Hashtag2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hashtag2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hashtag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
