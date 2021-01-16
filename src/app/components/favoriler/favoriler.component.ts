import { favoriServis } from './../../services/favoriServis';
import { Component, OnInit } from '@angular/core';
import { favori } from 'src/app/models/favori';

@Component({
  selector: 'app-favoriler',
  templateUrl: './favoriler.component.html',
  styleUrls: ['./favoriler.component.css']
})
export class FavorilerComponent implements OnInit {

  uid: string;
  kayitlar: any;
  constructor(
    public Fbservis: favoriServis
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.kayitListele();
  }

  kayitListele() {
    this.Fbservis.KayitListelebyUid(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as favori)
      })
    });

  }
  kayitSil(deger: string) {
    this.Fbservis.KayitSil(deger);
  }
}
