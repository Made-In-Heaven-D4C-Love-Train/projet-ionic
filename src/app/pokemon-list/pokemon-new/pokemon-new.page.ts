import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemons.model';
import { PokemonsService } from 'src/app/shared/pokemons.service';
@Component({
  selector: 'app-pokemon-new',
  templateUrl: './pokemon-new.page.html',
  styleUrls: ['./pokemon-new.page.scss']
})
export class PokemonNewPage implements OnInit {

  public pokemon! : Pokemons;
  constructor(
    private Pokemon: PokemonsService
  ) {
   }

  ngOnInit(): void {
    this.pokemon = new Pokemons();
  }
  add(){
    if(this.pokemon.name === "" || this.pokemon.type === "" || this.pokemon.url === "") alert("Les champs doivent être remplis !");
    else this.Pokemon.saveNewPokemon(this.pokemon).subscribe(() => {this.pokemon = new Pokemons()})
  }
}
