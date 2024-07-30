import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReglementComponent } from './main-reglement.component';

describe('MainReglementComponent', () => {
  let component: MainReglementComponent;
  let fixture: ComponentFixture<MainReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainReglementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
