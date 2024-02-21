import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import IContato from '../interfaces/interface';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  msg:string = ""
  constructor(private service: CrudService){}
  gravar(value:IContato){
    this.service.gravar(value).subscribe(data => this.msg="registro inserido com sucesso")
  }
}
