import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstwitterComponent } from './cardstwitter.component';

describe('CardstwitterComponent', () => {
  let component: CardstwitterComponent;
  let fixture: ComponentFixture<CardstwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardstwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardstwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
