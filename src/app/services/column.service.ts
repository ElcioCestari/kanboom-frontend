import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Column } from 'src/model/column/column';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  constructor(private http: HttpClient) { }
  save(column: Column) {
    const url = 'http://localhost:3000/column'
    return this.http.post(url, column)
      .toPromise()
      .then((data: any) => {
        alert("Coluna criado")
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }

  findById(id: string): Promise<Column> {
    const url = `http://localhost:3000/column/${id}`
    return this.http.get<Column>(url)
      .toPromise()
      .then((data: any) => {
        console.log("Coluna coluna encontrada")
        return data;
      })
      .catch((error) => {
        alert(error?.error?.message);
      });
  }
}
