import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemons } from '../models/pokemons.model';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pokemon-new',
  templateUrl: './pokemon-new.page.html',
  styleUrls: ['./pokemon-new.page.scss'],
})
export class PokemonNewPage implements OnInit {

  public pokemon! : Pokemons;
  constructor(
    private Pokemon: PokemonsService,
    private alertCtrl: AlertController
  ) {
   }

  ngOnInit(): void {
    this.pokemon = new Pokemons();
  }
  add() {
    if(this.pokemon.name === "" || this.pokemon.type === "" || this.pokemon.url === "") {
      this.presentAlert("Erreur", "Les champs doivent être remplis!");
    } else {
      this.Pokemon.saveNewPokemon(this.pokemon).subscribe(() => {this.pokemon = new Pokemons()});
    }
  }
  
  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  }


