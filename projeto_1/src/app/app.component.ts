import { Component } from '@angular/core';

// interface Contatos{
//   nome:string, 
//   email:string,
// }

interface Contatos {
  nome: string,
  email: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  title = 'app-aula1';
  msg:string="Hello world"
  ola:string="Olá mundo"
  esconde: boolean = false;
  rotulo: string = "Show"
  nome:string = "Gabriel"


  lista: Contatos[] = [
    {
    nome: "josé",
    email:"jose@gmail.com"
  },
  {
    nome:"Maria",
    email:"maria@gmail.com"
  }
  ]

  Ola(){
    if(this.msg == "Hello world"){
    this.msg = "goodbye"
    this.ola = "Tchau mundo"
  }else{
    this.msg = "Hello world"
    this.ola = "Olá mundo"
  }
  }

  showHide(){
    if(!this.esconde){
      this.esconde = true;
      this.rotulo = "show";
    }else{
      this.esconde = false;
      this.rotulo = "esconder";
    }
  }

  salvar(dados:any){
    this.lista.push(dados)
  }
}
