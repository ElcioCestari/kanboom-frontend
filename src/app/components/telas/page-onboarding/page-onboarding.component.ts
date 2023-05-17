import { Component } from '@angular/core';

@Component({
  selector: 'app-page-onboarding',
  templateUrl: './page-onboarding.component.html',
  styleUrls: ['./page-onboarding.component.css']
})
export class PageOnboardingComponent {
  translateValue = 0;

  nextSlide() {
    this.translateValue -= 100;
  }
}
