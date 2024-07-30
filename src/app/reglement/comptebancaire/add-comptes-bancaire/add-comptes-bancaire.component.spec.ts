import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComptesBancaireComponent } from './add-comptes-bancaire.component';

describe('AddComptesBancaireComponent', () => {
  let component: AddComptesBancaireComponent;
  let fixture: ComponentFixture<AddComptesBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComptesBancaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddComptesBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
