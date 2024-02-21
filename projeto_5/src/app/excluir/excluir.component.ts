import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudcontatoService } from '../crudcontato.service';
import IContato from '../interfaces/interface';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {
  idContato: any = ''
  contato:IContato = {nome: '', email: '', fone:''}

  constructor(private route: ActivatedRoute, private service: CrudcontatoService, private router:Router){
    this.idContato = this.route.snapshot.paramMap.get('idcontato')

    this.service.consultarPorId(this.idContato).subscribe(data => this.contato = data)
  }

  excluir(contato:any){
    this.service.excluir(this.contato.id).subscribe(data => this.router.navigate(['consultar']))
  }
  cancelar(){
    this.router.navigate(['consultar'])
  }
}
