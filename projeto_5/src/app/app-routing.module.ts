import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginService } from './auth-login.service';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastroUser',
    component: CadastroUserComponent
  },
  {
    path: 'cadastroContato',
    component: CadastroContatoComponent,
    canActivate:[AuthLoginService]
  },
  {
    path: 'consultar',
    component: ConsultaContatoComponent
  },
  {
    path:'edicao/:idcontato',
    component: EdicaoComponent
  },
  {
    path:'excluir/:idcontato',
    component: ExcluirComponent,
    canActivate:[AuthLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
