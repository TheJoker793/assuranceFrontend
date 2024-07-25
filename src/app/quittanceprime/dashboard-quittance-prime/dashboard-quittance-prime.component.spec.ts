import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuittancePrimeComponent } from './dashboard-quittance-prime.component';

describe('DashboardQuittancePrimeComponent', () => {
  let component: DashboardQuittancePrimeComponent;
  let fixture: ComponentFixture<DashboardQuittancePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardQuittancePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardQuittancePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
