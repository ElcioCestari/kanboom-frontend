import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOnboardingComponent } from './components/telas/page-onboarding/page-onboarding.component';
import { TelaLoginComponentComponent } from './components/telas/tela-login-component/tela-login-component.component';
import {
  PageCreateNewBoardComponent
} from './components/telas/page-create-new-board-component/page-create-new-board.component';
import {
  PageForgotPasswordComponent
} from './components/telas/page-forgot-password-component/page-forgot-password.component';
import {TelaCadastroComponent} from './components/telas/tela-cadastro/tela-cadastro.component';
import {PageHomeComponent} from './components/telas/page-home/page-home.component';
import {PageViewBoardComponent} from './components/telas/page-view-board/page-view-board.component';
import {
  PagePasswordRecoveryComponent
} from './components/telas/page-password-recovery/page-password-recovery.component';
import {authGuard} from "./guards/auth.guard";
import { PageViewCardComponent } from './components/telas/page-view-card/page-view-card.component';

const routes: Routes = [
  {path: '', component: TelaLoginComponentComponent},
  {path: 'login', component: TelaLoginComponentComponent},
  {path: 'page-onboarding', component: PageOnboardingComponent, canActivate: [authGuard]},
  {path: 'page-create-new-board', component: PageCreateNewBoardComponent, canActivate: [authGuard]},
  {path: 'page-forgot-password', component: PageForgotPasswordComponent},
  {path: 'tela-cadastro', component: TelaCadastroComponent, canActivate: [authGuard]},
  {path: 'page-home', component: PageHomeComponent, canActivate: [authGuard]},
  {path: 'page-view-board/:id', component: PageViewBoardComponent, canActivate: [authGuard]},
  // { path: 'page-create-column/:boardId', component: PageCreateColumnComponent }, // // não é mais uma pagina, não é mais necessario
  // { path: 'page-create-card/:columnId', component: PageCreateCardComponent }, // não é mais uma pagina, não é mais necessario
  {path: 'email/recovery/:email', component: PagePasswordRecoveryComponent},
  { path: 'page-view-card', component: PageViewCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
