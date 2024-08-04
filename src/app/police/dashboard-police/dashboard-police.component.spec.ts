import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPoliceComponent } from './dashboard-police.component';

describe('DashboardPoliceComponent', () => {
  let component: DashboardPoliceComponent;
  let fixture: ComponentFixture<DashboardPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPoliceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
