import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDossierSinistreComponent } from './detail-dossier-sinistre.component';

describe('DetailDossierSinistreComponent', () => {
  let component: DetailDossierSinistreComponent;
  let fixture: ComponentFixture<DetailDossierSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailDossierSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailDossierSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
