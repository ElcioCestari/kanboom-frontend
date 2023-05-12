import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../model/usuario';
import { UsuarioCreate } from 'src/model/usuario_create';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  login(usuario: Usuario) {
    let url = 'http://localhost:3000/users/login';
    this.http
      .post(url, usuario)
      .toPromise()
      .then((data: any) => {
        if (
          usuario.username === data[0].username &&
          usuario.password === data[0].password
        ) {
          sessionStorage.setItem('usuario', usuario.username);
          this.router.navigate(['/page-onboarding']);
        } else {
          alert('usuário não cadastrado');
        }
      })
      .catch((error) => {
        alert(error?.error?.message);
      });

    //chamar o backend para efetuar o login
    //salvar o usuário no sessionStorage
  }

  async save(usuario: UsuarioCreate) {
    // valida se os campos foram preenchidos
    if (
      !usuario.email ||
      !usuario.nome ||
      !usuario.senha ||
      !usuario.confirma
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    // Verificar se as senhas são iguais
    if (usuario.senha !== usuario.confirma) {
      alert('As senhas precisam ser iguais.');
      return;
    }

    // Verificar se as senhas são iguais
    if (usuario.senha !== usuario.confirma) {
      alert('As senhas precisam ser iguais.');
      return;
    }

    this.salvaUsuario(usuario).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
    });
  }

  private salvaUsuario(usuario: UsuarioCreate) {
    let url = 'http://localhost:3000/users';
    return this.http.post(url, usuario);
  }
}
