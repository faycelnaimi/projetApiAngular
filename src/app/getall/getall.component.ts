import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Etudiant } from '../class/etudiant'

const url = 'http://localhost:8000/api/students';


@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  etudiants : Etudiant[];
  etudiant : Etudiant;

  constructor(private http: HttpClient,  private router: Router, private spinner: NgxSpinnerService) { }


  
  ngOnInit(): void {
  //affiche tout les étudiants de la base de données
    this.http.get<Etudiant[]>(url)
    .subscribe(etudiants => {
      this.etudiants = etudiants,
      err => console.log(err),
      console.log(this.etudiants)
      });
  }

  deleteEtudiant(id){
    this.spinner.show();
    this.http.delete(url+'/'+id)
    .subscribe(
      data  => {
      console.log("DELETE Request is successful ", data);

      

      
      },
      error  => {
      console.log("Error", error);
      }
    );
    this.spinner.hide(); 

    //Redirection
    this.router.navigate(['/getAll']);

    
    

  }



}
