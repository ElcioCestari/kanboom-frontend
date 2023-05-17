import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/model/board/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient, private router: Router) { }

  save(board: Board) {
    let url = 'http://localhost:3000/board';
    board.userId = sessionStorage.getItem("id")!
    return this.http.post(url, board);
  }
}
