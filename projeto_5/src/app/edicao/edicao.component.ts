import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudcontatoService } from '../crudcontato.service';
import IContato from '../interfaces/interface';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent {
  idContato: any = ''
  contato:IContato = {nome: '', email: '', fone:''}
  constructor(private route: ActivatedRoute, private service: CrudcontatoService){
    this.idContato = this.route.snapshot.paramMap.get('idcontato')

    this.service.consultarPorId(this.idContato).subscribe(data => this.contato = data)
  }

  alterar(){
    this.service.editar(this.contato).subscribe(data => console.log(data))
  }
}
