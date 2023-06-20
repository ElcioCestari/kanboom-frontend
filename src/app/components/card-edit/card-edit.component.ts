import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/model/card/card';

@Component({
  selector: 'app-page-view-card',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {
  comentarios: Comentario[] = [];
  novoComentario!: string;

  constructor(public dialogRef: MatDialogRef<CardEditComponent>,
    @Inject(MAT_DIALOG_DATA) public card: Card,
    private cardService: CardService,
  ) {
  }

  adicionarComentario() {
    const comentario: Comentario = {
      texto: this.novoComentario,
      horario: new Date()
    };

    this.comentarios.push(comentario);
    this.novoComentario = '';
  }

  update() {
    this.cardService.update(this.card)
  }

}

interface Comentario {
  texto: string;
  horario: Date;
}