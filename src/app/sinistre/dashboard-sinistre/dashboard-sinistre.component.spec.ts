import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSinistreComponent } from './dashboard-sinistre.component';

describe('DashboardSinistreComponent', () => {
  let component: DashboardSinistreComponent;
  let fixture: ComponentFixture<DashboardSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
