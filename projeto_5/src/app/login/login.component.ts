import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private service: UserService){}
 
  logar(user:any){
    this.service.logar(user).subscribe( data => {console.log(data)
    localStorage.setItem('login', JSON.stringify(data))
    })
  }

}
