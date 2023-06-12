import { Component } from '@angular/core';

@Component({
  selector: 'app-page-view-card',
  templateUrl: './page-view-card.component.html',
  styleUrls: ['./page-view-card.component.css']
})
export class PageViewCardComponent {
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