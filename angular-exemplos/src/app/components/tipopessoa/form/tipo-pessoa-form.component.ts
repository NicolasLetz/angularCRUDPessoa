import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../models/Pessoa';
import { Endereco } from '../../models/Endereco';

@Component({
  selector: 'app-tipo-pessoa-form',
  templateUrl: './tipo-pessoa-form.component.html',
  styleUrls: ['./tipo-pessoa-form.component.css']
})
export class TipoPessoaFormComponent implements OnInit {
  pessoa: Pessoa;
  constructor(private service: PessoaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoa.endereco = new Endereco();
  }
  postPessoa(): void{
    this.service.postPessoa(this.pessoa);
  }
}