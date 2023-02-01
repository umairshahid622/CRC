import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topurls2Component } from './topurls2.component';

describe('Topurls2Component', () => {
  let component: Topurls2Component;
  let fixture: ComponentFixture<Topurls2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topurls2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topurls2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
