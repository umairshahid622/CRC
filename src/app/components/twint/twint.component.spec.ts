import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwintComponent } from './twint.component';

describe('TwintComponent', () => {
  let component: TwintComponent;
  let fixture: ComponentFixture<TwintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
