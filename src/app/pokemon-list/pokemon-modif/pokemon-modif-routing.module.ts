import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListPage } from '../pokemon-list.page';

import { PokemonModifPage } from './pokemon-modif.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonListPage,
  },
  {
    path: ':id',
    component: PokemonModifPage,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonModifPageRoutingModule {}
