import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  // {
  //   path: 'pokemon-list',
  //   loadChildren: () => import('./pokemon-list/pokemon-list.module').then( m => m.PokemonListPageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'tab',
  //   loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  // },
  // {
  //   path: 'pokemon-modif',
  //   loadChildren: () => import('./pokemon-modif/pokemon-modif.module').then( m => m.PokemonModifPageModule)
  // },
  // {
  //   path: 'pokemon-new',
  //   loadChildren: () => import('./pokemon-new/pokemon-new.module').then( m => m.PokemonNewPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
