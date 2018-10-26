import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/Pessoa';


@Component({
  selector: 'app-tipo-pessoa-list',
  templateUrl: './tipo-pessoa-list.component.html',
  styleUrls: ['./tipo-pessoa-list.component.css']
})
export class TipoPessoaListComponent implements OnInit {
  pessoas: Pessoa[];
  constructor(
    private service: PessoaService
    ) { }

  ngOnInit() {
    this.pessoas = new Array();
    this.getListPessoas();
  }
  
  getListPessoas() {
    this.pessoas = new Array<Pessoa>();
    this.service.getPessoas().subscribe(resposta => this.pessoas = resposta);
  }
}
