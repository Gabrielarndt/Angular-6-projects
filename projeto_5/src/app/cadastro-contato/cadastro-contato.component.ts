import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudcontatoService } from '../crudcontato.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent {
  msg: string = ""
  constructor(private service: CrudcontatoService, private router: Router) { }

  gravar(value: any) {
    this.service.gravar(value).subscribe(data => {this.router.navigate(['consultar'])})
  }
}