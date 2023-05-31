import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateCardComponent } from './page-create-card.component';

describe('PageCreateCardComponent', () => {
  let component: PageCreateCardComponent;
  let fixture: ComponentFixture<PageCreateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreateCardComponent]
    });
    fixture = TestBed.createComponent(PageCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
