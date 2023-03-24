import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonModifPageRoutingModule } from './pokemon-modif-routing.module';

import { PokemonModifPage } from './pokemon-modif.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: PokemonModifPage
  },
  {
    path: ':id',
    component: PokemonModifPage

  },
  
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonModifPageRoutingModule
  ],
  declarations: [PokemonModifPage]
})
export class PokemonModifPageModule {}
