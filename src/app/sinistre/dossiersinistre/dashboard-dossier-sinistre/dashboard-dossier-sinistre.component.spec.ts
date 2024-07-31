import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDossierSinistreComponent } from './dashboard-dossier-sinistre.component';

describe('DashboardDossierSinistreComponent', () => {
  let component: DashboardDossierSinistreComponent;
  let fixture: ComponentFixture<DashboardDossierSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDossierSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDossierSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
