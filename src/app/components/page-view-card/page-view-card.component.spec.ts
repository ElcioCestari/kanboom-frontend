import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewCardComponent } from './page-view-card.component';

describe('PageViewCardComponent', () => {
  let component: PageViewCardComponent;
  let fixture: ComponentFixture<PageViewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageViewCardComponent]
    });
    fixture = TestBed.createComponent(PageViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
