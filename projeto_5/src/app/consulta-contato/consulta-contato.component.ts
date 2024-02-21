import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudcontatoService } from '../crudcontato.service';
import IContato from '../interfaces/interface';

@Component({
  selector: 'app-consulta-contato',
  templateUrl: './consulta-contato.component.html',
  styleUrls: ['./consulta-contato.component.css']
})
export class ConsultaContatoComponent {
  contatos:IContato[] = []
  constructor(private service: CrudcontatoService, private router: Router){
    this.consultar()
  }

  consultar(){
    this.service.consultar().subscribe(data => this.contatos = data)
  }
}
