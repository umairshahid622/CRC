import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydashboardComponent } from './historydashboard.component';

describe('HistorydashboardComponent', () => {
  let component: HistorydashboardComponent;
  let fixture: ComponentFixture<HistorydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorydashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
