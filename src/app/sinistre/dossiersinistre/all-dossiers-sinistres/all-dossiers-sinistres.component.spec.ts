import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDossiersSinistresComponent } from './all-dossiers-sinistres.component';

describe('AllDossiersSinistresComponent', () => {
  let component: AllDossiersSinistresComponent;
  let fixture: ComponentFixture<AllDossiersSinistresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDossiersSinistresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDossiersSinistresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
