import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
modif: boolean = false;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async setModif() {
    if(!this.modif){
      const alert = await this.alertCtrl.create({
        header: "Etes-vous sûr de vouloir modifier ?",
        subHeader: 'Vous rendrez la modification possible',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else{
      this.modif = !this.modif;
    }
  }
}
