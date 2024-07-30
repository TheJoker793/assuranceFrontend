import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDossiersComponent } from './all-dossiers.component';

describe('AllDossiersComponent', () => {
  let component: AllDossiersComponent;
  let fixture: ComponentFixture<AllDossiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDossiersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
