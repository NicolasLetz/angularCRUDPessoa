import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoPessoaFormComponent } from './form/tipo-pessoa-form.component';
import { TipoPessoaListComponent } from './list/tipo-pessoa-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: TipoPessoaListComponent},
  {path: 'create', component: TipoPessoaFormComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [TipoPessoaFormComponent, TipoPessoaListComponent]
})
export class TipoPessoaModule { }
