import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TelaCadastroComponent} from './components/telas/tela-cadastro/tela-cadastro.component';
import {TelaLoginComponentComponent} from './components/telas/tela-login-component/tela-login-component.component';
import {
  PageCreateNewBoardComponent
} from './components/telas/page-create-new-board-component/page-create-new-board.component';
import {PageOnboardingComponent} from './components/telas/page-onboarding/page-onboarding.component';
import {
  PageForgotPasswordComponent
} from './components/telas/page-forgot-password-component/page-forgot-password.component';
import {PageHomeComponent} from './components/telas/page-home/page-home.component';
import {Usuario} from 'src/model/usuario';
import {PageViewBoardComponent} from './components/telas/page-view-board/page-view-board.component';
import {CardViewComponent} from './components/card-view/card-view.component';
import {ColumnComponent} from './components/column/column.component';
import {PageCreateColumnComponent} from './components/telas/page-create-column/page-create-column.component';
import {PageCreateCardComponent} from './components/telas/page-create-card/page-create-card.component';
import {
  PagePasswordRecoveryComponent
} from './components/telas/page-password-recovery/page-password-recovery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { ColumnDragAndDropComponent } from './components/column-drag-and-drop/column-drag-and-drop.component';
import { DragDropModule } from "@angular/cdk/drag-drop";

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
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    TelaLoginComponentComponent,
    TelaCadastroComponent,
    AppComponent,
    TelaLoginComponentComponent,
    PageCreateNewBoardComponent,
    PageOnboardingComponent,
    PageForgotPasswordComponent,
    PageHomeComponent,
    PageViewBoardComponent,
    CardViewComponent,
    ColumnComponent,
    PageCreateColumnComponent,
    PageCreateCardComponent,
    PagePasswordRecoveryComponent,
    ColumnDragAndDropComponent,
  ],
  providers: [Usuario],
  bootstrap: [AppComponent],

})

export class AppModule {
}
