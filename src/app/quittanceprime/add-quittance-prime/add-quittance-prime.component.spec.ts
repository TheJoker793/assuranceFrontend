import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuittancePrimeComponent } from './add-quittance-prime.component';

describe('AddQuittancePrimeComponent', () => {
  let component: AddQuittancePrimeComponent;
  let fixture: ComponentFixture<AddQuittancePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddQuittancePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddQuittancePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
