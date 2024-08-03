import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuittanceComponent } from './dashboard-quittance.component';

describe('DashboardQuittanceComponent', () => {
  let component: DashboardQuittanceComponent;
  let fixture: ComponentFixture<DashboardQuittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardQuittanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardQuittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
