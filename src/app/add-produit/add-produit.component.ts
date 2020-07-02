import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Etudiant } from '../class/etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from  'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

const urlbase = 'http://localhost:8000/api/students';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  @Input() etudiantData = { name: '', course: ''};
  etudiant : Etudiant;
 

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  addEtudiant(){

    this.spinner.show();

    console.log(this.etudiantData.name);
    
    console.log(this.etudiantData.course);
   // alert(JSON.stringify(this.etudiantData));

    this.http.post(urlbase, JSON.stringify(this.etudiantData), httpOptions)
      .subscribe(
        data  => {
        console.log("POST Request is successful ", data);
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
