import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/model/usuario';


@Component({
  selector: 'app-page-password-recovery',
  templateUrl: './page-password-recovery.component.html',
  styleUrls: ['./page-password-recovery.component.css']
})
export class PagePasswordRecoveryComponent {
  email!: string;
  newPassword!: string;
  confirmPassword!: string;

  constructor(private userService: UserService, private router: Router) { }

  submitForm() {
    if (this.newPassword !== this.confirmPassword) {
      alert('As senhas não correspondem');
    }
    const user = new Usuario()
    user.email = this.email
    user.password = this.newPassword
    this.userService.resetPassword(user).toPromise()
      .then((data: any) => {
        alert("Senha alterada")
        this.router.navigate(['']);
      }
      )
      .catch((error) => {
        alert(error?.error?.message);
      });
  }
}


