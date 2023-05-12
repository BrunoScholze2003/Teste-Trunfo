
import { NgModule } from '@angular/core';
import { PoButtonModule, PoPageModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { PoTableModule } from '@po-ui/ng-components';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './componentes/page/categoria.component';

@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    PoPageModule,
    PoButtonModule,
    CategoriaRoutingModule,
    PoPageDynamicSearchModule,
    PoTableModule
  ],
})
export class ProdutoModule { }
