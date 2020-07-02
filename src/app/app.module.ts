import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

import bootstrap from "bootstrap";
import { GetallComponent } from './getall/getall.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { GetetudiantComponent } from './getetudiant/getetudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetallComponent,
    AddProduitComponent,
    GetetudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
