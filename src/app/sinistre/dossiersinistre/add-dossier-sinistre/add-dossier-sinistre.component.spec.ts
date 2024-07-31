import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDossierSinistreComponent } from './add-dossier-sinistre.component';

describe('AddDossierSinistreComponent', () => {
  let component: AddDossierSinistreComponent;
  let fixture: ComponentFixture<AddDossierSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDossierSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDossierSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
