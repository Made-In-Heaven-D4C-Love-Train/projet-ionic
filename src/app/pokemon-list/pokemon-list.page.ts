import { Component, OnInit, Input } from '@angular/core';
import { Pokemons } from '../models/pokemons.model';
import { PokemonsService } from '../shared/pokemons.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})

export class PokemonListPage implements OnInit {

  pokemons! : any;
  pokeSearch?: string;

  @Input() pokemon?: string;
  // pokemon2?: string = this.pokemon;
  @Input() type?: string;
  @Input() id?: string;
  @Input() url?: string;

  constructor(
    private Pokemon: PokemonsService,
    public alertController: AlertController
  ) { }

  ngOnInit(): void {
    this.Pokemon.getAllPokemons().subscribe((data: any) => {this.pokemons = data;
   
    })
  }

  getFilteredPokemons(): Pokemons[] {
    if(this.pokeSearch !== undefined)
    return this.pokemons.filter((pokemon: { name: (string | undefined)[]; }) => pokemon.name.indexOf(this.pokeSearch) !== -1);
    else return this.pokemons;
  }


  getType(){
    return this.type;
  }

  getId(){
    return this.id;
  }

  async supprimer(id: string | undefined) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Voulez-vous vraiment supprimer ce Pokémon ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            // console.log('Suppression annulée');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.Pokemon.delete(id);
            // console.log(`Le Pokémon avec l'id ${id} a été supprimé`);
          }
        }
      ]
    });

    await alert.present();
  }



  modifier(){
    console.log(this.Pokemon.get(this.id));
   
  }

  getURL(){
    return this.url;
  }

  // goToPokemonModif(pokemonId: string | undefined) {
  //    // Remplacez par la valeur de l'ID que vous souhaitez
  //    this.navCtrl.navigateForward(`/tab/pokemon-list/pokemon-modif/${pokemonId}`, { animated: false });
  // }

  

}
