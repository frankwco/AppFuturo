import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditarImcPage } from '../pages/editar-imc/editar-imc';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ImcService } from '../services/imc';


import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
  apiKey: "AIzaSyAGoa378DyTpCLgWpLZjZ7F6i_3ZolL3Sc",
  authDomain: "hellofirebase-4d514.firebaseapp.com",
  databaseURL: "https://hellofirebase-4d514.firebaseio.com",
  projectId: "hellofirebase-4d514",
  storageBucket: "hellofirebase-4d514.appspot.com",
  messagingSenderId: "707902383156"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarImcPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarImcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ImcService
  ]
})
export class AppModule { }
