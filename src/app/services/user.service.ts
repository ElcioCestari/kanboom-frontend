import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../components/telas/tela-login-component/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {
  }

  login(usuario: Usuario) {
    let url = "http://localhost:3000/users/login";
    this.http.post(url, usuario).toPromise().then((data: any) => {

      if (usuario.username === data[0].username && usuario.password === data[0].password) {
        sessionStorage.setItem("usuario", usuario.username)
        this.router.navigate(['/page-onboarding']);
      } else {
        alert("usuário não cadastrado")
      }
    }).catch(error => {
      alert(error?.error?.message)
    })


    //chamar o backend para efetuar o login
    //salvar o usuário no sessionStorage
  }

  save() {
    //valida se os campos foram preenchidos
    //salva um usuário
  }
}
