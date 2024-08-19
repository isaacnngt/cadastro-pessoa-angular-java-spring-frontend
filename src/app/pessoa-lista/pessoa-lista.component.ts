import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pessoa-lista',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Pessoas</h2>
    <button (click)="voltar()">voltar</button>
    <ul>
      <li *ngFor="let pessoa of pessoas">
        ID: {{ pessoa.id }} - Nome: {{ pessoa.nome }}
      </li>
    </ul>
    <p *ngIf="pessoas.length === 0">Nenhuma pessoa cadastrada.</p>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `
})
export class PessoaListaComponent implements OnInit {
  pessoas: any[] = [];
  errorMessage: string = '';

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.pessoaService.listarPessoas().subscribe(
      (data) => {
        console.log('Dados recebidos:', data);
        this.pessoas = data;
      },
      (error) => {
        console.error('Erro ao listar pessoas:', error);
        this.errorMessage = 'Erro ao carregar a lista de pessoas.';
      }
    );
  }

  voltar(){

    window.history.back();

  }
}
