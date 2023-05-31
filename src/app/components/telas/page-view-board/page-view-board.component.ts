import {Component, OnInit, Renderer2} from '@angular/core';
import {Usuario} from 'src/model/usuario';
import {UserService} from 'src/app/services/user.service';
import {Board} from "../../../../model/board/board";
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../../../services/board.service";
import {ColumnService} from "../../../services/column.service";
import {Column} from "../../../../model/column/column";


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
              private columnService: ColumnService,
              private boardService: BoardService) {
  }

  async ngOnInit(): Promise<void> {
    this.email = `${this.userService.getEmail(this.usuario)}`
    const id = this.route.snapshot.params['id'];
    this.boardService.getById(id)
      .subscribe({
        next: async (result) => {
          this.board = result
          await this.addColumns(result);
        },
        error: (error) => {
          console.error(error);
          alert('algo deu errado');
        }
      });
  }

  private async addColumns(result: Board) {
    const columnAux: Column[] = [];
    for (let column of this.board.columns) {
      const c = await this.columnService.findById(column.toString());
      columnAux.push(c)
    }
    result.columns = columnAux
  }

  toGoOut() {
    sessionStorage.clear();
  }
}
