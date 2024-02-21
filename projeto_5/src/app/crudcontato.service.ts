import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IContato from './interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CrudcontatoService {

  private API_URL = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient){} 

  consultar(){ 
    // let userLogado = JSON.parse(localStorage.getItem('login') || '')
    // let headers = new HttpHeaders();
    // headers = headers.set('x-access-token', userLogado.token)
    return this.http.get<[IContato]>(this.API_URL)
  }

  consultarPorId(id:number){
    return this.http.get<IContato>(`http://localhost:3000/contatos/${id}`)
  }

  gravar(contato:IContato){
    return this.http.post(this.API_URL, contato)
  }

  editar(contato:IContato){
    return this.http.put(`http://localhost:3000/contatos/${contato.id}`, contato)
  }

  excluir(idcontato: any) {
    return  this.http.delete(`http://localhost:3000/contatos/${idcontato}`)
  }

  
}
