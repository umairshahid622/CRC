import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topurls1Component } from './topurls1.component';

describe('Topurls1Component', () => {
  let component: Topurls1Component;
  let fixture: ComponentFixture<Topurls1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topurls1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topurls1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
