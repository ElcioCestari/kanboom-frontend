import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOnboardingComponent } from './page-onboarding.component';

describe('PageOnboardingComponent', () => {
  let component: PageOnboardingComponent;
  let fixture: ComponentFixture<PageOnboardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageOnboardingComponent]
    });
    fixture = TestBed.createComponent(PageOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
