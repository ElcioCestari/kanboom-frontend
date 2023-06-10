import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDragAndDropComponent } from './column-drag-and-drop.component';

describe('ColumnDragAndDropComponent', () => {
  let component: ColumnDragAndDropComponent;
  let fixture: ComponentFixture<ColumnDragAndDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnDragAndDropComponent]
    });
    fixture = TestBed.createComponent(ColumnDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
