import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateColumnComponent } from './page-create-column.component';

describe('PageCreateColumnComponent', () => {
  let component: PageCreateColumnComponent;
  let fixture: ComponentFixture<PageCreateColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreateColumnComponent]
    });
    fixture = TestBed.createComponent(PageCreateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
