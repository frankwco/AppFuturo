import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Imc } from '../model/imc';

import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

//import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';



@Injectable()
export class ImcService {

  private imcRef = this.db.list<Imc>('imc');
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getImcs() {
    /*    let itemsRef: AngularFireList<any>;
        itemsRef = this.db.list('imc');
        console.log("Items REF: " + itemsRef);

        this.items = itemsRef.snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );

        console.log("ITEM NOVO: " + this.items);
        */
    //return this.imcRef;
    return this.db.list('imc');
  }

  addImc(imc: Imc) {
    return this.imcRef.push(imc);
  }

  updateImc(imc: Imc) {
    return this.imcRef.update(imc.key, imc);
  }

  removeImc(imc: Imc) {
    return this.imcRef.remove(imc.key);
  }
}


//  this.ref.on('value', resp => {
//    this.imcs = [];
//    this.imcs = snapshotToArray(resp);
//  });
/*
this.imcsList = this.imcService.getImcs()
  .snapshotChanges()
  .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
    */
/*
    this.items = this.imcService.getImcs().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
*/

//LISTA QUE DEU CERTO
/*
    let itemsRef: AngularFireList<any>;
    itemsRef = this.imcService.getImcs();
    //console.log("Items REF: " + itemsRef);

    this.items = itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
*/
//, ref => ref.orderBy('nome').orderBy('nome')
//this.imcsList = this.db.collection('/imc').valueChanges();
//this.items = this.afoDatabase.list('/imc');
//console.log("ITEM NOVO: " + this.items);
