import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login() {
    //chamar o backend para efetuar o login
    //salvar o usuário no sessionStorage
  }

  save() {
    //valida se os campos foram preenchidos
    //salva um usuário
  }
}
