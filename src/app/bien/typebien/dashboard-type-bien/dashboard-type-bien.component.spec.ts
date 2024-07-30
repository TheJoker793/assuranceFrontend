import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTypeBienComponent } from './dashboard-type-bien.component';

describe('DashboardTypeBienComponent', () => {
  let component: DashboardTypeBienComponent;
  let fixture: ComponentFixture<DashboardTypeBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTypeBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTypeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
