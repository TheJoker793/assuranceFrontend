import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComptesBancaireComponent } from './update-comptes-bancaire.component';

describe('UpdateComptesBancaireComponent', () => {
  let component: UpdateComptesBancaireComponent;
  let fixture: ComponentFixture<UpdateComptesBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateComptesBancaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateComptesBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
