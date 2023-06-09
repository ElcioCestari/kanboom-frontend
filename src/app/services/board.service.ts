import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/model/board/board';
import { Observable } from "rxjs";
import { Column } from 'src/model/column/column';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient, private router: Router) {
  }

  save(board: Board) {
    const url = 'http://localhost:3000/board';
    board.userId = sessionStorage.getItem("id")!
    return this.http.post(url, board)
      .toPromise()
      .then((data: any) => {
        alert("Quadro criado")
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }

  getAll() {
    const userId = sessionStorage.getItem("id")!
    const url = `http://localhost:3000/board/user/${userId}`;
    return this.http.get(url)
      .toPromise()
      .then((data: any) => {
        return data
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }

  getById(id: any): Observable<Board> {
    const url = `http://localhost:3000/board/${id}`;
    return this.http.get<Board>(url);
  }

  update(columns: Column[]) {
  const url = `http://localhost:3000/board/${columns[0].boardId}`;
    return this.http.patch(url, {columns})
      .toPromise()
      .then((data: any) => {
        alert("Quadro atualizado")
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }
}
