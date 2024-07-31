import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDossierSinistreComponent } from './main-dossier-sinistre.component';

describe('MainDossierSinistreComponent', () => {
  let component: MainDossierSinistreComponent;
  let fixture: ComponentFixture<MainDossierSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDossierSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDossierSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
