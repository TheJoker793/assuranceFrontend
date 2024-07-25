import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuittancePrimeComponent } from './main-quittance-prime.component';

describe('MainQuittancePrimeComponent', () => {
  let component: MainQuittancePrimeComponent;
  let fixture: ComponentFixture<MainQuittancePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainQuittancePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainQuittancePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
