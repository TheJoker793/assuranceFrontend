import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComptesBancairesComponent } from './all-comptes-bancaires.component';

describe('AllComptesBancairesComponent', () => {
  let component: AllComptesBancairesComponent;
  let fixture: ComponentFixture<AllComptesBancairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllComptesBancairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllComptesBancairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
