import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPersonneComponent } from './dashboard-personne.component';

describe('DashboardPersonneComponent', () => {
  let component: DashboardPersonneComponent;
  let fixture: ComponentFixture<DashboardPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPersonneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
