import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForgotPasswordComponent } from './page-forgot-password.component';

describe('PageForgotPasswordComponent', () => {
  let component: PageForgotPasswordComponent;
  let fixture: ComponentFixture<PageForgotPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageForgotPasswordComponent]
    });
    fixture = TestBed.createComponent(PageForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
