import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-page-password-recovery',
  templateUrl: './page-password-recovery.component.html',
  styleUrls: ['./page-password-recovery.component.css']
})
export class PagePasswordRecoveryComponent {
  email!: string;
  newPassword!: string;
  confirmPassword!: string;

  constructor(private userService: UserService) { }

  submitForm() {
    if (this.newPassword !== this.confirmPassword) {
      alert('As senhas não correspondem');
    }

    this.userService.getUserByEmail(this.email).subscribe(
      (user: any) => {
        user.password = this.newPassword
        this.userService.updateUser(user)
      })
  }
}


