import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login = {username: '', password: ''}
  constructor(private service: ServService) {}

  onLogin(form: NgForm){
      if(form.valid){
        this.service.connexion(form.value["username"], form.value["password"]);
      }
  }

}
