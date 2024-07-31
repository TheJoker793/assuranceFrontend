import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDossierSinistreComponent } from './update-dossier-sinistre.component';

describe('UpdateDossierSinistreComponent', () => {
  let component: UpdateDossierSinistreComponent;
  let fixture: ComponentFixture<UpdateDossierSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDossierSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDossierSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
