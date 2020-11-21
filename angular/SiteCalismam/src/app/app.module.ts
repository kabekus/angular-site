import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GirisEkraniComponent } from './giris-ekrani/giris-ekrani.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { UrunComponent } from './urun/urun.component';
import { UrunFiltresiPipe } from './urun/urun-filtresi.pipe';
import { AlertifyService } from './servisler/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    GirisEkraniComponent,
    NavComponent,
    CategoryComponent,
    UrunComponent,
    UrunFiltresiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
