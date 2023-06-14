import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-page-view-card',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {
  comentarios: Comentario[] = [];
  novoComentario!: string;

  constructor(public dialogRef: MatDialogRef<CardEditComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string,
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
}

interface Comentario {
  texto: string;
  horario: Date;
}