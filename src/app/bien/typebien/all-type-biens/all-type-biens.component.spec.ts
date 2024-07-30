import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeBiensComponent } from './all-type-biens.component';

describe('AllTypeBiensComponent', () => {
  let component: AllTypeBiensComponent;
  let fixture: ComponentFixture<AllTypeBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTypeBiensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTypeBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
