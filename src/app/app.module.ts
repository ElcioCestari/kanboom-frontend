import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponentComponent } from './components/telas/tela-login-component/tela-login-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageCreateNewBoardComponent } from './components/telas/page-create-new-board-component/page-create-new-board.component';

@NgModule({
  declarations: [AppComponent, TelaLoginComponentComponent, PageCreateNewBoardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
