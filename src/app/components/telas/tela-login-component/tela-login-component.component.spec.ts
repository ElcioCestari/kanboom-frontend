import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginComponentComponent } from './tela-login-component.component';

describe('TelaLoginComponentComponent', () => {
  let component: TelaLoginComponentComponent;
  let fixture: ComponentFixture<TelaLoginComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaLoginComponentComponent]
    });
    fixture = TestBed.createComponent(TelaLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
