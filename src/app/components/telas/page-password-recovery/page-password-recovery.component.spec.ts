import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePasswordRecoveryComponent } from './page-password-recovery.component';

describe('PagePasswordRecoveryComponent', () => {
  let component: PagePasswordRecoveryComponent;
  let fixture: ComponentFixture<PagePasswordRecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePasswordRecoveryComponent]
    });
    fixture = TestBed.createComponent(PagePasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
