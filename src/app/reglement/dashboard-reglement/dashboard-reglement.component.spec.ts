import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReglementComponent } from './dashboard-reglement.component';

describe('DashboardReglementComponent', () => {
  let component: DashboardReglementComponent;
  let fixture: ComponentFixture<DashboardReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardReglementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
