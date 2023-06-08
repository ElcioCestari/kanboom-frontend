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
}
