import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetallComponent } from './getall/getall.component';
import { GetetudiantComponent } from './getetudiant/getetudiant.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

 



const routes: Routes = [
  {
    path: 'getAll',
    component:  GetallComponent 
  },
  {
    path: 'getEtudiant/:id',
    component: GetetudiantComponent
  },

  {
    path: 'add',
    component:  AddProduitComponent 
  },
  { 
    path: '**',
    redirectTo: 'not-found' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
