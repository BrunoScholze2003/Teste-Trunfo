import { NgModule } from '@angular/core';
import { PoButtonModule, PoPageModule } from '@po-ui/ng-components';
import { ProdutoPageComponent } from './page/produto-page.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { PoTableModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [ProdutoPageComponent],
  imports: [
    PoPageModule,
    PoButtonModule,
    ProdutoRoutingModule,
    PoPageDynamicSearchModule,
    PoTableModule
  ],
})
export class ProdutoModule { }
