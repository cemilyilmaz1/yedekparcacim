import { isletme } from './../../models/isletme';
import { isletmeServis } from './../../services/isletmeServis';
import { urunkayit } from './../../models/urunkayit';
import { urunkayitServis } from './../../services/urunkayitServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urunkayit',
  templateUrl: './urunkayit.component.html',
  styleUrls: ['./urunkayit.component.css']
})
export class UrunkayitComponent implements OnInit {

  uid: string;
  durum: string;
  sonuc: boolean;
  kayitlar2: any;

  seckayit: urunkayit = new urunkayit();
  constructor(
    public fbservis: urunkayitServis,
    public Fbservis2: isletmeServis
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.bilgiListele();
  }
  urunEkle() {
    this.seckayit.isletmeid = this.uid;
    this.fbservis.KayitEkle(this.seckayit).then(s => {
      this.durum = "Ürün Eklendi";
      this.sonuc = true;
    }, err => {
      this.durum = "ürün Eklenemedi"
      this.sonuc = false;
    });
  }
  bilgiListele() {

    this.Fbservis2.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar2 = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar2.push(y as isletme)
      })
    });

  }
}

