import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsletmeComponent } from './components/isletme/isletme.component';
import { KullanicilarComponent } from './components/kullanicilar/kullanicilar.component';
import { UrunkayitComponent } from './components/urunkayit/urunkayit.component';
import { UrunlisteleComponent } from './components/urunlistele/urunlistele.component';
import { UrunsilComponent } from './components/urunsil/urunsil.component';
import { ListeleComponent } from './components/listele/listele.component';
import { FavorilerComponent } from './components/favoriler/favoriler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    IsletmeComponent,
    KullanicilarComponent,
    UrunkayitComponent,
    UrunlisteleComponent,
    UrunsilComponent,
    ListeleComponent,
    FavorilerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
