import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'pokemon-list',
        loadChildren: () => import('../pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },

      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'pokemon-new',
        loadChildren: () => import('../pokemon-new/pokemon-new.module').then(m => m.PokemonNewPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('../pokemon-modif/pokemon-modif.module').then(m => m.PokemonModifPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
