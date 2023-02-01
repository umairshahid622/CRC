import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCardComponent } from './reddit-card.component';

describe('RedditCardComponent', () => {
  let component: RedditCardComponent;
  let fixture: ComponentFixture<RedditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
