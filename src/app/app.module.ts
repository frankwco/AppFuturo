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
  apiKey: "AIzaSyDltzEkbhWf63Avgjnehrh4k6Eb2pLEOqY",
  authDomain: "hellofirebase-45140.firebaseapp.com",
  databaseURL: "https://hellofirebase-45140.firebaseio.com",
  projectId: "hellofirebase-45140",
  storageBucket: "hellofirebase-45140.appspot.com",
  messagingSenderId: "479367654861"
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
