import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }

  logar(user:any){
    return this.http.post('https://agenda-tph0.onrender.com/usuario/login', user)
  }
}
