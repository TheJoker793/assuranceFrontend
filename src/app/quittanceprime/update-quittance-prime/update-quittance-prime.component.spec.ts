import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuittancePrimeComponent } from './update-quittance-prime.component';

describe('UpdateQuittancePrimeComponent', () => {
  let component: UpdateQuittancePrimeComponent;
  let fixture: ComponentFixture<UpdateQuittancePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateQuittancePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateQuittancePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
