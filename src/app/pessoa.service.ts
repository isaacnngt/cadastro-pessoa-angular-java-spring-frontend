import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:8085/api/pessoas';

  constructor(private http: HttpClient) { }

  cadastrarPessoa(nome: string): Observable<any> {
    return this.http.post(this.apiUrl, { nome });
  }

  listarPessoas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
