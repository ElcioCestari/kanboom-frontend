import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { UserService } from 'src/app/services/user.service';
import { Board } from "../../../../model/board/board";
import { ActivatedRoute } from "@angular/router";
import { BoardService } from "../../../services/board.service";


@Component({
  selector: 'app-page-view-board',
  templateUrl: './page-view-board.component.html',
  styleUrls: ['./page-view-board.component.css']
})
export class PageViewBoardComponent implements OnInit {
  email!: string;
  title!: string;
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
          this.board = result
        },
        error: (error) => {
          console.error(error);
          alert('algo deu errado');
        }
      });
  }

  toGoOut() {
    sessionStorage.clear();
  }
}
