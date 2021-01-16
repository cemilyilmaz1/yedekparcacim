import { isletmeServis } from './../../services/isletmeServis';
import { urunkayit } from './../../models/urunkayit';
import { urunkayitServis } from './../../services/urunkayitServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urunlistele',
  templateUrl: './urunlistele.component.html',
  styleUrls: ['./urunlistele.component.css']
})
export class UrunlisteleComponent implements OnInit {

  uid: string;
  kayitlar: any;
  urunSayi: number = 0;
  constructor(
    public Fbservis: urunkayitServis
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.KayitListele();
  }
  KayitListele() {

    this.Fbservis.KayitListelebyUid2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as urunkayit)
        this.urunSayi = this.urunSayi + 1;
      })
    });

  }
  silme(key: string) {
    location.reload();
    this.Fbservis.KayitSil(key);

  }
}
