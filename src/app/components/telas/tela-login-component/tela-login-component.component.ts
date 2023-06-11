import { UserService } from '../../../services/user.service';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Usuario } from '../../../../model/usuario';

@Component({
  selector: 'app-tela-login-component',
  templateUrl: './tela-login-component.component.html',
  styleUrls: ['./tela-login-component.component.css'],
})
export class TelaLoginComponentComponent implements OnInit {
  usuario: Usuario = new Usuario();
  private service: UserService;
  camposPreenchidos = false;


  verificarPreenchimento() {
    if (this.camposPreenchidos == !!(this.usuario.email && this.usuario.password)) {
      this.renderer.addClass(this.elementRef.nativeElement.querySelector('#btn-enter'), 'destaque');
    }else{
      this.renderer.removeClass(this.elementRef.nativeElement.querySelector('#btn-enter'), 'destaque');
    }
  }
  constructor(service: UserService, private elementRef: ElementRef, private renderer: Renderer2) {
    this.service = service;
  }


  ngOnInit(): void {
  }

  login() {
    this.service.login(this.usuario);
  }
}
