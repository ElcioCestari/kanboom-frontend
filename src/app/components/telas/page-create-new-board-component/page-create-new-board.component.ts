import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { Board } from 'src/model/board/board';

@Component({
  selector: 'app-page-create-new-board',
  templateUrl: './page-create-new-board.component.html',
  styleUrls: ['./page-create-new-board.component.css']
})
export class PageCreateNewBoardComponent {
  board: Board = new Board();

  constructor(private service: BoardService) { }

  save() {
    this.service.save(this.board)
  }

}
