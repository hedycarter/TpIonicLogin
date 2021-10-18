import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor() { }

  nom: any;
  prenom: any;
  login: any;
  dateconnecte = new Date();

  ngOnInit() {
    this.nom = localStorage.getItem("nom");
    this.prenom = localStorage.getItem("prenom");
    this.login = localStorage.getItem("login");
    this.dateconnecte;
  }

}
