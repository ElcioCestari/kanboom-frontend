import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateNewBoardComponent } from './page-create-new-board.component';

describe('PageCreateNewBoardComponent', () => {
  let component: PageCreateNewBoardComponent;
  let fixture: ComponentFixture<PageCreateNewBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreateNewBoardComponent]
    });
    fixture = TestBed.createComponent(PageCreateNewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
