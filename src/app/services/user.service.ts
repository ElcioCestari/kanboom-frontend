import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../model/usuario';
import { UsuarioCreate } from 'src/model/usuario_create';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) { }
  login(usuario: Usuario) {
    let url = 'http://localhost:3000/users/login';
    this.http
      .post(url, usuario)
      .toPromise()
      .then((data: any) => {
        sessionStorage.setItem('usuario', usuario.email);
        sessionStorage.setItem('id', data.id);
        this.router.navigate(['/page-onboarding']);
      })
      .catch((error) => {
        alert(error?.error?.message);
      });

    //chamar o backend para efetuar o login
    //salvar o usuário no sessionStorage
  }

  getEmail(usuario: Usuario) {
    return sessionStorage.getItem("usuario");
  }

  async save(usuario: UsuarioCreate) {
    // valida se os campos foram preenchidos
    if (
      !usuario.email ||
      !usuario.name ||
      !usuario.password ||
      !usuario.confirma
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    // Verificar se as senhas são iguais
    if (usuario.password !== usuario.confirma) {
      alert('As senhas precisam ser iguais.');
      return;
    }

    // Verificar se as senhas são iguais
    if (usuario.password !== usuario.confirma) {
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

  private apiUrl = 'http://localhost:3000/email/recovery/';

  getUserByEmail(email: string) {
    const url = `${this.apiUrl}${email}`;
    return this.http.get(url);
  }

  updateUser(user: any) {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put(url, user);
  }

  recoveryEmail(email: string) {
    const url = `http://localhost:3000/email/recovery/${email}`
    this.http.post(url, null).toPromise()
      .then((data: any) => {
        // this.router.navigate(['/email/recovery/:email']);
        alert("Funcionou")
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }
}
