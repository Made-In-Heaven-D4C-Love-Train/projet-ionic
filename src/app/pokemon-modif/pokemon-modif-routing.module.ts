import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonModifPage } from './pokemon-modif.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonModifPage
  },
  {
    path: ':id',
    loadChildren: () => import('./pokemon-modif.module').then( m => m.PokemonModifPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonModifPageRoutingModule {}
