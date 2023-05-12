import { GridComponent } from './grid.component';
import { NgModule } from '@angular/core';
import { PoButtonModule, PoPageModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { PoTableModule } from '@po-ui/ng-components';
import { PoLoadingModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [GridComponent],
  imports: [
    PoPageModule,
    PoButtonModule,
    PoPageDynamicSearchModule,
    PoTableModule,
    PoFieldModule,
    PoLoadingModule

  ],
})
export class ProdutoModule { }
