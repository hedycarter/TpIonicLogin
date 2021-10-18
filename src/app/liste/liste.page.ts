import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  listApprenant: any;
  constructor(
    private service: ServService,
    public router: Router) { }

  ngOnInit() {
    this.liste();
  }

  liste(){
   this.service.listeApprenant().subscribe((data: any) => {
    this.listApprenant = data;
    return this.router.navigate(["/liste"]);
  });
}

}
