import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

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
  title = 'app-aula1-2';

  lista: Contatos[] = [
    {
      nome: "exemplo",
      email: "exemplo@gmail.com"
    }
  ];

  salvar(dados: any) {
    let mensagem:string = "null";
    for (let i: number = 0; this.lista.length > i || mensagem == "Já existe"; i++) {
      if (this.lista[i] == dados) {
        mensagem = "Já existe "
        console.log(mensagem)
      }
    }
    if (mensagem == "null") {
      this.lista.push(dados)
    }
  }
  excluir(contato: Contatos) {
    let pos = this.lista.indexOf(contato)
    this.lista.splice(pos, 1)
    // pos é a posição, 1 é a quantidade para ser excluido
  }
}
