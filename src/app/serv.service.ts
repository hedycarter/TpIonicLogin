import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  env = environment.url;
  apprenantcon : any;
  listApprenant : any;
 
  constructor(
    private http: HttpClient,
    public router: Router
    ) { }



  public connexion(login: string, password: string){
    return this.http.get(this.env +"connect/" + login + "/" + password).
      subscribe( (data: any) => {
            this.apprenantcon = data;
            localStorage.setItem("nom", data["nom"]);
            localStorage.setItem("prenom", data["prenom"]);
            localStorage.setItem("login", data["login"]);
            //console.log(localStorage.getItem("nom"));
            this.router.navigate(["/accueil"]);
       });
  }


  public listeApprenant(){
    return this.http.get(this.env + "/all");
      
  }

  public logout(){
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
    localStorage.removeItem("login");
    localStorage.clear;
    this.router.navigate(["/home"])
  }
}
