import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDossierComponent } from './dashboard-dossier.component';

describe('DashboardDossierComponent', () => {
  let component: DashboardDossierComponent;
  let fixture: ComponentFixture<DashboardDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDossierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
