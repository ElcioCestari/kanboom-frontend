import { Component, Input } from '@angular/core';
import { Card } from "../../../model/card/card";
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/model/usuario';
import { CardEditComponent } from '../card-edit/card-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { CardDeleteComponent } from '../card-delete/card-delete.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  email!: string;
  constructor(private userService: UserService, private usuario: Usuario, public dialog: MatDialog, private cardService: CardService) {
    this.email = `${this.userService.getEmail(this.usuario)}`
  }

  @Input() card: Card = { name: '' };

  openEditCard() {
    const dialogRef = this.dialog.open(CardEditComponent, {
      data: this.card,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteCard() {
    const dialogRef = this.dialog.open(CardDeleteComponent, {
      data: this.card,
    });
  }

}
