import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IContato from './interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  contatos: string[] = ["João", "Maria"]
  constructor(private http: HttpClient) { }

  gravar(dados: IContato) {
    console.log(dados)
    return this.http.post<IContato>('http://localhost:3000/contatos', dados)
  }

  consultarTodos() {
    return this.http.get<[IContato]>('http://localhost:3000/contatos')
  }

  excluir(idcontato: any) {
    return  this.http.delete(`http://localhost:3000/contatos/${idcontato}`)
  }
}