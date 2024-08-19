import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Cadastro de Pessoa</h2>
    <button (click)="teste()">Listar</button>
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="nome" name="nome" placeholder="Nome da pessoa" required>
      <button type="submit">Cadastrar</button>
    </form>
    <p *ngIf="mensagem" [ngClass]="{'success': !erro, 'error': erro}">{{ mensagem }}</p>
  `,
  styles: [`
    .success { color: green; }
    .error { color: red; }
  `]
})
export class PessoaCadastroComponent {
  nome: string = '';
  mensagem: string = '';
  erro: boolean = false;

  constructor(private pessoaService: PessoaService,private router: Router) { }

  onSubmit() {
    if (this.nome) {
      this.pessoaService.cadastrarPessoa(this.nome).subscribe(
        response => {
          this.mensagem = 'Pessoa cadastrada com sucesso!';
          this.nome = '';
          this.erro = false;
        },
        error => {
          this.mensagem = 'Erro ao cadastrar pessoa.';
          this.erro = true;
        }
      );
    }
  }
  teste() {

    this.router.navigate(['/lista']);

  }

}
