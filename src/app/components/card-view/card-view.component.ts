import { Component, Input } from '@angular/core';
import { Card } from "../../../model/card/card";
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  email!: string;
  constructor(private userService: UserService, private usuario: Usuario) {
    this.email = `${this.userService.getEmail(this.usuario)}`
  }

  @Input() card: Card = { name: '' };
}
