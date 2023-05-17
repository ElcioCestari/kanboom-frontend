import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaCadastroComponent } from './components/telas/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponentComponent } from './components/telas/tela-login-component/tela-login-component.component';

import { PageCreateNewBoardComponent } from './components/telas/page-create-new-board-component/page-create-new-board.component';
import { PageOnboardingComponent } from './components/telas/page-onboarding/page-onboarding.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  declarations: [
    AppComponent,
    TelaLoginComponentComponent,
    TelaCadastroComponent,
    AppComponent,
    TelaLoginComponentComponent,
    PageCreateNewBoardComponent,
    PageOnboardingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
