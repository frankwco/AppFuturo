import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Imc } from '../../model/imc';

import * as firebase from 'firebase';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ImcService } from '../../services/imc';

import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

//import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private imc: Imc = new Imc();
  //private imc = {};
  ref = firebase.database().ref("imc/");
  imcs = [];
  //items: Observable<any[]>;
  imcsList: Observable<any[]>

  private itemCollection: AngularFirestoreCollection<Imc>;
  items: Observable<Imc[]>




  constructor(public navCtrl: NavController, private imcService: ImcService, private afs: AngularFirestore) {


    this.itemCollection = afs.collection<Imc>('imc');
    this.items = this.itemCollection.valueChanges();


    console.log("teste?: ");



  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  cadastrarImc() {
    //    let novoImc = this.ref.push();
    //    novoImc.set(this.imc);
    //this.imcService.addImc(this.imc);
    const id = this.afs.createId();
    //const item: Item = { id, name };
    this.imc.key = id;

    this.itemCollection.doc(id).set(JSON.parse(JSON.stringify(this.imc)));

    //this.itemCollection.add(JSON.parse(JSON.stringify(this.imc)));
    //  this.imc = new Imc();

    //console.log("IMC :: " + this.imc.nome);
  }

}
export const snapshotToArray = snapshot => {
  var returnArr = [];
  snapshot.forEach(childSnapshot => {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};
