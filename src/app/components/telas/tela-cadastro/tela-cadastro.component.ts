import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UsuarioCreate } from 'src/model/usuario_create';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css'],
})
export class TelaCadastroComponent {
  usuario = new UsuarioCreate();
  save() {
    this.service.save(this.usuario);
  }

  constructor(private service: UserService) {}
}
