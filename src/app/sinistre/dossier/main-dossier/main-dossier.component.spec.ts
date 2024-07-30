import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDossierComponent } from './main-dossier.component';

describe('MainDossierComponent', () => {
  let component: MainDossierComponent;
  let fixture: ComponentFixture<MainDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDossierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
