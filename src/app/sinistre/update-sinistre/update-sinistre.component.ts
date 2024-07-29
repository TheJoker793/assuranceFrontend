import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TypeSinistre } from '../Sinistre.model';
import { Situation } from '../../admin/Situation/Situation.model'
import { SinistreService } from '../serviceSinistre/sinistre.service';
import { SituationService } from '../../admin/Situation/SituationService/situation.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-sinistre',
  templateUrl: './update-sinistre.component.html',
  styleUrl: './update-sinistre.component.css'
})
export class UpdateSinistreComponent implements OnInit {
  situations: Situation[] = [];
  types: TypeSinistre[] = [];
  sinistreId!: number;
  sinistreForm!: FormGroup;
  constructor(private sinistreService: SinistreService, private fb: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute,
    private situationService: SituationService

  ) {
    this.sinistreForm = this.fb.group({
      id: new FormControl(null),
      libelle: new FormControl(''),
      reference: new FormControl(''),
      description: new FormControl(''),
      montantExpertise: new FormControl(''),
      montantIndemniser: new FormControl(''),
      dateSinistre: new FormControl(''),
      dateAjout: new FormControl(''),
      degatMateriel: new FormControl(''),
      cause: new FormControl(''),
      lieux: new FormControl(''),
      objet: new FormControl(''),
      dateValidation: new FormControl(''),
      personneId: new FormControl(null),
      cinPersonne: new FormControl(''),
      prenomPersonne: new FormControl(''),
      nomPersonne: new FormControl(''),
      dateNaissancePersonne: new FormControl(''),
      typeSinistreId: new FormControl(null),
      libelleTypeSinistre: new FormControl(''),
      situationId: new FormControl(null),
      libelleSituation: new FormControl(''),

    })
  }
  ngOnInit(): void {
    this.loadSinistre();
    this.loadSituation();
    this.loadTypes();
  }
  loadSituation() {
    this.situationService.getAllSituations().subscribe(
      (data: Situation[]) => {
        this.situations = data

      }
    )
  }
  loadTypes() {
    this.sinistreService.getAllTypeSinistre().subscribe(
      (data: TypeSinistre[]) => {
        this.types = data;
      }
    )
  }
  loadSinistre() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.sinistreId = params['id'];
        const id = this.sinistreId;
        this.sinistreService.getSinistreById(id).subscribe(
          (data) => {
            this.sinistreForm = this.fb.group({
              id: new FormControl(data.id),
              libelle: new FormControl(data.libelle),
              reference: new FormControl(data.reference),
              description: new FormControl(data.description),
              montantExpertise: new FormControl(data.montantExpertise),
              montantIndemniser: new FormControl(data.montantIndemniser),
              dateSinistre: new FormControl(data.dateSinistre),
              dateAjout: new FormControl(data.dateAjout),
              degatMateriel: new FormControl(data.degatMateriel),
              cause: new FormControl(data.cause),
              lieux: new FormControl(data.lieux),
              objet: new FormControl(data.objet),
              dateValidation: new FormControl(data.dateValidation),
              typeSinistreId: new FormControl(data.typeSinistreId),
              libelleTypeSinistre: new FormControl(data.libelleTypeSinistre),
              situationId: new FormControl(data.situationId),
              libelleSituation: new FormControl(data.libelleSituation),
              personneId: new FormControl(data.personneId),
              cinPersonne: new FormControl(data.cinPersonne),
              prenomPersonne: new FormControl(data.prenomPersonne),
              nomPersonne: new FormControl(data.nomPersonne),
              dateNaissancePersonne: new FormControl(data.dateNaissancePersonne)

            })
          }
        )
      }
    )
  }
  confirmUpdate() {
    this.sinistreService.updateSinistre(this.sinistreId, this.sinistreForm.value).subscribe(
      () => {
        this.router.navigate(['sinistres/list'])
      }
    )
  }
}
