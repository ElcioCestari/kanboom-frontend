import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { UserService } from 'src/app/services/user.service';
import { Board } from 'src/model/board/board';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  boards!: Board[];
  email!: string;
  constructor(private service: BoardService, private userService: UserService, private usuario: Usuario) { }


  async ngOnInit(): Promise<void> {
    this.boards = await this.service.getAll();
    this.email = `${this.userService.getEmail(this.usuario)}`
  }

  toGoOut() {
    sessionStorage.clear();
  }
}
