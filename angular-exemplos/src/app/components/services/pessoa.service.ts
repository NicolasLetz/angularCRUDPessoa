import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  constructor(
    private http: HttpClient
  ) { }
  getPessoas() :Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>('http://10.11.21.162:8080/pessoa');
  }
  getPessoa(cpf: string) : Observable<Pessoa>{
    return this.http.get<Pessoa>('http://10.11.21.162:8080/pessoa/'+ cpf);
  }
  postPessoa(pessoa: Pessoa): void {
    this.http.post('http://10.11.21.162:8080/pessoa', pessoa);
  }
}
