import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Etudiant } from '../class/etudiant';
import { ActivatedRoute, Router } from '@angular/router';

const urlbase = 'http://localhost:8000/api/students/';

@Component({
  selector: 'app-getetudiant',
  templateUrl: './getetudiant.component.html',
  styleUrls: ['./getetudiant.component.css']
})
export class GetetudiantComponent implements OnInit {


  id : number;
  etudiant : Etudiant;
  etudiant_detail : Etudiant;
  url :string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.url = urlbase + this.id;

    this.http.get<Etudiant>(this.url).subscribe(etudiant => {
      console.log(etudiant),
      err => console.log(err)
      this.etudiant = etudiant
      });


  }

}
