import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMarchandisesComponent } from './dashboard-marchandises.component';

describe('DashboardMarchandisesComponent', () => {
  let component: DashboardMarchandisesComponent;
  let fixture: ComponentFixture<DashboardMarchandisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMarchandisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMarchandisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
