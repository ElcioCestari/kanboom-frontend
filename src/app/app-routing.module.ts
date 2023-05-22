import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOnboardingComponent } from './components/telas/page-onboarding/page-onboarding.component';
import { TelaLoginComponentComponent } from './components/telas/tela-login-component/tela-login-component.component';
import { PageCreateNewBoardComponent } from './components/telas/page-create-new-board-component/page-create-new-board.component';
import { PageForgotPasswordComponent } from './components/telas/page-forgot-password-component/page-forgot-password.component';
import { TelaCadastroComponent } from './components/telas/tela-cadastro/tela-cadastro.component';
import { PageHomeComponent } from './components/telas/page-home/page-home.component';
import { PageViewBoardComponent } from './components/telas/page-view-board/page-view-board.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponentComponent },
  { path: 'page-onboarding', component: PageOnboardingComponent },
  { path: 'page-create-new-board', component: PageCreateNewBoardComponent },
  { path: 'page-forgot-password', component: PageForgotPasswordComponent },
  { path: 'tela-cadastro', component: TelaCadastroComponent },
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-view-board', component: PageViewBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
