import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuittancesComponent } from './all-quittances.component';

describe('AllQuittancesComponent', () => {
  let component: AllQuittancesComponent;
  let fixture: ComponentFixture<AllQuittancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllQuittancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllQuittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
