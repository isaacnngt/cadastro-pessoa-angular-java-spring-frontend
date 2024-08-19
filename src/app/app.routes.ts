import { Routes } from '@angular/router';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';

export const routes: Routes = [
  { path: 'cadastro', component: PessoaCadastroComponent },
  { path: 'lista', component: PessoaListaComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];
