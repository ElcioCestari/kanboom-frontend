import { Component } from '@angular/core';

@Component({
  selector: 'app-page-view-card',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {
  comentarios: Comentario[] = [];
  novoComentario!: string;

  adicionarComentario() {
    const comentario: Comentario = {
      texto: this.novoComentario,
      horario: new Date ()
    };

    this.comentarios.push(comentario);
    this.novoComentario = '';
  }
}

interface Comentario {
  texto: string;
  horario: Date;
}