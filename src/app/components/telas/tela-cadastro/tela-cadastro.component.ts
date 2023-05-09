import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
  
})
export class TelaCadastroComponent {
email = new FormControl('')
save(){
  alert(this.email.value)
}
}
