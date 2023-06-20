import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/model/card/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';


@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent {
  constructor(public dialogRef: MatDialogRef<CardDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public card: Card,
    private cardService: CardService,
  ) {
  }

  delete() {
    this.cardService.deleteCard(this.card);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
