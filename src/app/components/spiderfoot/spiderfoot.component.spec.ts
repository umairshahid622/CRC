import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderfootComponent } from './spiderfoot.component';

describe('SpiderfootComponent', () => {
  let component: SpiderfootComponent;
  let fixture: ComponentFixture<SpiderfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiderfootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiderfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
