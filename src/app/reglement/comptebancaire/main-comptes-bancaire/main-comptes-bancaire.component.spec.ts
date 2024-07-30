import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComptesBancaireComponent } from './main-comptes-bancaire.component';

describe('MainComptesBancaireComponent', () => {
  let component: MainComptesBancaireComponent;
  let fixture: ComponentFixture<MainComptesBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComptesBancaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainComptesBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
