import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReglementsComponent } from './all-reglements.component';

describe('AllReglementsComponent', () => {
  let component: AllReglementsComponent;
  let fixture: ComponentFixture<AllReglementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllReglementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllReglementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
