import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReglementService } from '../../reglementService/reglement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-comptes-bancaire',
  templateUrl: './update-comptes-bancaire.component.html',
  styleUrl: './update-comptes-bancaire.component.css'
})
export class UpdateComptesBancaireComponent implements OnInit{
  @Output() cbId!:number;
  cbForm!:FormGroup;
  constructor(private cbService:ReglementService,private fb:FormBuilder,
    private activateRoute:ActivatedRoute,private router:Router){
    this.cbForm=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      rib:new FormControl(''),
      cle:new FormControl('')
    })
  }
  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      (params)=>{
        this.cbId=params['id'];
        const id=this.cbId;
        this.cbService.getCompteBancaireById(id).subscribe(
          (data)=>{
            this.cbForm=this.fb.group({
              id:new FormControl(data.id),
              libelle:new FormControl(data.libelle),
              rib:new FormControl(data.rib),
              cle:new FormControl(data.cle)
            })
          }
        )
      }
    )
  }
  
  
  confimUpdate(){
    this.cbService.updateCompteBancaire(this.cbId,this.cbForm.value).subscribe(
      ()=>{
        this.router.navigate(['reglements/compteBancaires/list']);
      }
    )
  }
}
