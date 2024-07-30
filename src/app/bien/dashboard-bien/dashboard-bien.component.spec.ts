import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBienComponent } from './dashboard-bien.component';

describe('DashboardBienComponent', () => {
  let component: DashboardBienComponent;
  let fixture: ComponentFixture<DashboardBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
