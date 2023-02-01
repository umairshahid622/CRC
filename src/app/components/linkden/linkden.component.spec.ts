import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdenComponent } from './linkden.component';

describe('LinkdenComponent', () => {
  let component: LinkdenComponent;
  let fixture: ComponentFixture<LinkdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
