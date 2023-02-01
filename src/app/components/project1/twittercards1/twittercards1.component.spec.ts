import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twittercards1Component } from './twittercards1.component';

describe('Twittercards1Component', () => {
  let component: Twittercards1Component;
  let fixture: ComponentFixture<Twittercards1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twittercards1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Twittercards1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
