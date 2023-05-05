import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-login-component',
  templateUrl: './tela-login-component.component.html',
  styleUrls: ['./tela-login-component.component.css'],
})
export class TelaLoginComponentComponent {
  private service: UserService;
  constructor(service: UserService) {
    this.service = service;
  }

  login() {
    alert('Funcionou');
    this.service.login();
  }
}
