import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../servicePersonne/personne.service';
import { Personne } from '../model.personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrl: './list-personne.component.css'
})
export class ListPersonneComponent implements OnInit {
  personnes: Personne[] = []
  constructor(private personneService: PersonneService,private router:Router) {

  } 
  ngOnInit(): void {
    this.refresh()
  }
  refresh() {
    this.personneService.allClient().subscribe(
      (data: Personne[]) => {
        this.personnes = data;
        console.log(this.personnes);
      }

    )

  }
  deleteClient(personne:any){
    this.personneService.deleteClient(personne.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }
  goUpdate(personne:Personne){
    this.router.navigate(['personnes/update',personne.id])
  }
  


}
