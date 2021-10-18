import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from './serv.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate: any;

  constructor(
    private service: ServService,
    public router: Router
    ) {
      this.sideMenu();
    }


  sideMenu(){
    this.navigate = [
      {
        title : "Accueil",
        icon: "Home",
        url : "/accueil"
      },
      {
        title : "Apprenants",
        icon:  "people-circle-outline",
        url : "/liste"
      },
      {
        title : "Deconnexion",
        icon: "log-out-outline",
        url : "/home"
      },

    ]
  }

  async deconnexion() {
      this.service.logout();
      console.log(localStorage.getItem("login"));
  }

  async accueil() {
       this.router.navigate(['/accueil']);
 
   }

   async listeApprenants() {
    this.router.navigate(['/liste']);
   }
}
