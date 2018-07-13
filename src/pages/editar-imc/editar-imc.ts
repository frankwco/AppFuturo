import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Imc } from '../../model/imc';
import { ImcService } from '../../services/imc';

@IonicPage()
@Component({
  selector: 'page-editar-imc',
  templateUrl: 'editar-imc.html',
})
export class EditarImcPage {
private imc: Imc = new Imc();
  constructor(public navCtrl: NavController, public navParams: NavParams, public imcService:ImcService) {
    this.imc = this.navParams.get("imc");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarImcPage');
  }

  alterarImc(){
    this.imcService.updateImc(this.imc);
    this.navCtrl.pop();
  }

  removerImc(){
    this.imcService.removeImc(this.imc);
    this.navCtrl.pop();
  }

}
