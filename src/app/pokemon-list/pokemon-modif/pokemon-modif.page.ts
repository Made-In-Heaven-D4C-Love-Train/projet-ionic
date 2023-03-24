import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/shared/pokemons.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemon-modif',
  templateUrl: './pokemon-modif.page.html',
  styleUrls: ['./pokemon-modif.page.scss'],
})
export class PokemonModifPage implements OnInit {

  Pokemons: any;
  pokemon: any;
  change: boolean = false;

  constructor(private route: ActivatedRoute, private Pokemon: PokemonsService) { }

  ngOnInit(): void {
    this.pokemon.id = this.route.snapshot.paramMap.get('id');
    console.log("test "+this.pokemon.id);
    this.Pokemon.get(this.pokemon.id).subscribe((value: any) => {
      
      this.pokemon = value;
    })
  }

  modif(){
    if(this.pokemon.name === "" || this.pokemon.type === "" || this.pokemon.url === "") alert("Les champs doivent être remplis !");
    else{
    this.Pokemon.update(this.pokemon).subscribe(() => { 
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
  }

}
