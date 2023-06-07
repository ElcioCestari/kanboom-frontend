import { Component } from '@angular/core';

@Component({
  selector: 'app-page-view-card',
  templateUrl: './page-view-card.component.html',
  styleUrls: ['./page-view-card.component.css']
})
export class PageViewCardComponent {
  comentarios: string[] = [];
  novoComentario!: string;

  adicionarComentario() {
    this.comentarios.push(this.novoComentario);
    this.novoComentario = '';
  }
}
