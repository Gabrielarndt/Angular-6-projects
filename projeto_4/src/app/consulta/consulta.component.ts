import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import IContato from '../interfaces/interface';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  contatos:IContato[] = []

  constructor(private service:CrudService){
    this.consultar();
  }
  consultar(){
    this.service.consultarTodos().subscribe(dados => {
      this.contatos = dados})
  }
  excluir(ct:any){
    this.service.excluir(ct).subscribe(() => this.consultar())
    console.log('Registro excluido com sucesso')
  }
  editarContato(contato: IContato): void {
    this.service.editar(contato).subscribe(() => {
      console.log('Contato atualizado com sucesso');
      // Redirecionar para a página de consulta após a atualização do contato
      this.router.navigate(['/consulta']);
    }, error => {
      console.error('Erro ao atualizar contato', error);
    });
  }
}
