import { FavorilerComponent } from './components/favoriler/favoriler.component';
import { ListeleComponent } from './components/listele/listele.component';
import { UrunsilComponent } from './components/urunsil/urunsil.component';
import { UrunlisteleComponent } from './components/urunlistele/urunlistele.component';
import { UrunkayitComponent } from './components/urunkayit/urunkayit.component';
import { KullanicilarComponent } from './components/kullanicilar/kullanicilar.component';
import { IsletmeComponent } from './components/isletme/isletme.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  { path: 'isletme', component: IsletmeComponent },
  { path: 'kullanicilar', component: KullanicilarComponent },
  { path: 'isletme/urunkayit', component: UrunkayitComponent },
  { path: 'isletme/urunlistele', component: UrunlisteleComponent },
  { path: 'kullanici/listele', component: ListeleComponent },
  { path: 'kullanici/favoriler', component: FavorilerComponent },
  { path: 'isletme/urunsil', component: UrunsilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
