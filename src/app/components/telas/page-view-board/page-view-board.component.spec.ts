import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewBoardComponent } from './page-view-board.component';

describe('PageViewBoardComponent', () => {
  let component: PageViewBoardComponent;
  let fixture: ComponentFixture<PageViewBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageViewBoardComponent]
    });
    fixture = TestBed.createComponent(PageViewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
