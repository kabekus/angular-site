import { Component, OnInit } from '@angular/core';
import { Urun } from './urun';
import { AlertifyService } from '../servisler/alertify.service';



@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css']
})
export class UrunComponent implements OnInit {

  public odenecekToplamTutar=0;
  constructor(private alertifyService:AlertifyService) { }
  title="Ürün Listesi"
  urunBulucu=""
  urunler: Urun[];

  ngOnInit(): void {
  }

  sepeteEkle(urun):void
  {
    this.odenecekToplamTutar+=urun.urunDeger;
    this.alertifyService.success("Ödeme bekleyen ücret= "+this.odenecekToplamTutar);
  }

}
