import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Usuario} from 'src/model/usuario';
import {UserService} from 'src/app/services/user.service';
import {Board} from "../../../../model/board/board";
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../../../services/board.service";
import {Column} from "../../../../model/column/column";
import {Card} from "../../../../model/card/card";

@Component({
  selector: 'app-page-view-board',
  templateUrl: './page-view-board.component.html',
  styleUrls: ['./page-view-board.component.css']
})
export class PageViewBoardComponent implements OnInit {
  email!: string;
  title!: string;
  @ViewChild('card', {static: true}) card!: ElementRef;
  @ViewChild('column', {static: true}) column!: ElementRef;
  board: Board = {
    _id: '',
    name: '',
    columns: [],
    userId: '',
  }

  constructor(private userService: UserService,
              private usuario: Usuario,
              private route: ActivatedRoute,
              private renderer: Renderer2,
              private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.email = `${this.userService.getEmail(this.usuario)}`
    const id = this.route.snapshot.params['id'];
    this.boardService.getById(id)
      .subscribe({
        next: (result) => {
          console.warn(result)
          this.board = {
            _id: '_id_fake',
            userId: 'userId_fake',
            name: 'name_fake',
            columns: [
              {
                name: 'TODO',
                cards: [
                  {
                    name: 'CARD_NAME_1',
                  },
                  {
                    name: 'CARD_NAME_2',
                  }
                ]
              },
              {
                name: 'DOING',
                cards: [
                  {
                    name: 'CARD_NAME_1',
                  },
                  {
                    name: 'CARD_NAME_2',
                  }
                ]
              }
            ]
          }
        },
        error: (error) => {
          console.error(error);
          alert('algo deu errado');
        }
      });
  }

  adicionarDiv() {
    const div = this.renderer.createElement('div');
    this.renderer.setAttribute(div, "class", 'cards');

    const span1 = this.renderer.createElement('span');
    const span1Valeu = this.renderer.createText('Nome da lista');
    this.renderer.appendChild(span1, span1Valeu);

    const span2 = this.renderer.createElement('span');
    const span2Valeu = this.renderer.createText('Nome da tarefa');
    this.renderer.appendChild(span2, span2Valeu);


    const divIcon = this.renderer.createElement('div');
    this.renderer.setAttribute(divIcon, 'class', 'icons');

    const icon1 = this.renderer.createElement('span');
    const icon1Value = '&#9788; 0';
    const caractereDecodificado1 = this.renderer.createText(this.createHtmlIcon(icon1Value));
    this.renderer.appendChild(icon1, caractereDecodificado1);

    const icon2 = this.renderer.createElement('span')
    const icon2Value = '&#128336; 0';
    const caractereDecodificado2 = this.renderer.createText(this.createHtmlIcon(icon2Value));
    this.renderer.appendChild(icon2, caractereDecodificado2);

    const email = this.renderer.createElement('span');
    const emailValue = this.email;

    const novoNodoTexto = this.renderer.createText(emailValue);

    this.renderer.setProperty(email, 'createText', '');
    this.renderer.appendChild(email, novoNodoTexto);

    this.renderer.appendChild(div, span1);
    this.renderer.appendChild(div, span2);
    this.renderer.appendChild(div, divIcon);
    this.renderer.appendChild(div, email);

    this.renderer.appendChild(divIcon, icon1);
    this.renderer.appendChild(divIcon, icon2);
    this.renderer.appendChild(this.card.nativeElement, div);
  }

  createHtmlIcon(html: string): string {
    const icon1 = this.renderer.createElement('span');
    icon1.innerHTML = html;

    const icon2 = this.renderer.createElement('span');
    icon2.innerHTML = html;


    return icon1.textContent && icon2.textContent;
  }

  adiconarColuna() {
    const divColumn = this.renderer.createElement('div');
    this.renderer.setAttribute(divColumn, "class", 'column');
    const title = this.renderer.createText("DONE")

    this.renderer.appendChild(divColumn, title)
    this.renderer.appendChild(this.column.nativeElement, divColumn);
  }

  toGoOut() {
    sessionStorage.clear();
  }
}
