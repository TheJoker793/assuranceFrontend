import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContratComponent } from './dashboard-contrat.component';

describe('DashboardContratComponent', () => {
  let component: DashboardContratComponent;
  let fixture: ComponentFixture<DashboardContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardContratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
