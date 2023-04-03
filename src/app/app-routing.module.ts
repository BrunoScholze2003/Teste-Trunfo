import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MesaComponent } from './mesa/mesa.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule)
      }
    ]
  },
  {
    path: 'mesa', component: MesaComponent,
    loadChildren: () => import('./mesa/mesa.module').then((m) => m.MesaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
