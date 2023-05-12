import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './componentes/page/categoria.component';



const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriaRoutingModule { }
