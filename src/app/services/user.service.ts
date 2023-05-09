import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../components/telas/tela-login-component/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  login(usuario: Usuario) {
    let url = "http://localhost:3000/users";
    this.http.get(url, {
    }).toPromise().then((data: any) => {

      if (usuario.username === data[0].username && usuario.password === data[0].password) {
        sessionStorage.setItem("usuario", usuario.username)
      } else {
        alert("usuário não cadastrado")
      }
    })


    //chamar o backend para efetuar o login
    //salvar o usuário no sessionStorage
  }

  save() {
    //valida se os campos foram preenchidos
    //salva um usuário
  }
}
