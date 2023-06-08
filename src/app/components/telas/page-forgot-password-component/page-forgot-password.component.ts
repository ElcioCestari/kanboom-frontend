import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/model/usuario';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './page-forgot-password.component.html',
  styleUrls: ['./page-forgot-password.component.css'],
})

export class PageForgotPasswordComponent {
  email: string = '';
  constructor(private router: Router, private userService: UserService, private usuario: Usuario) { }
  recovery() {
    if(this.email === ''){
      alert("Informe um email")
    }else {
      this.userService.recoveryEmail(this.email)
    }
  }
}
