import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-tela-login-component',
  templateUrl: './tela-login-component.component.html',
  styleUrls: ['./tela-login-component.component.css'],
})
export class TelaLoginComponentComponent implements OnInit {
  usuario: Usuario = new Usuario;
  private service: UserService;
  constructor(service: UserService) {
    this.service = service;
  }

  ngOnInit(): void {

  }

  login() {
    this.service.login(this.usuario);

  }
}
