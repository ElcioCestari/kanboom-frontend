import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from 'src/model/card/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }
  save(card: Card) {
    const url = 'http://localhost:3000/card'
    return this.http.post(url, card);
  }

  findById(id: string): Promise<Card> {
    const url = `http://localhost:3000/card/${id}`
    return this.http.get<Card>(url)
      .toPromise()
      .then((data: any) => {
        console.log("Card encontrado")
        return data;
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }

  update(card: Card) {
    const url = `http://localhost:3000/card/${card._id}`;
    console.warn(card)
    return this.http.patch(url, { card })
      .toPromise()
      .then((data: any) => {
        alert("Card atualizado")
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }

  deleteCard(card: Card) {
    const url = `http://localhost:3000/card/${card._id}`;
    console.warn(card)
    return this.http.delete(url)
      .toPromise()
      .then((data: any) => {
        alert("Card deletado")
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }
}
