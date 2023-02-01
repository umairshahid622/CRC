import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerytableComponent } from './querytable.component';

describe('QuerytableComponent', () => {
  let component: QuerytableComponent;
  let fixture: ComponentFixture<QuerytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
