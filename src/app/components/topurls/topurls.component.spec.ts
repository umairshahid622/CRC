import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopurlsComponent } from './topurls.component';

describe('TopurlsComponent', () => {
  let component: TopurlsComponent;
  let fixture: ComponentFixture<TopurlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopurlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopurlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
