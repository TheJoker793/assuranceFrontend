import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQuittancePrimeComponent } from './detail-quittance-prime.component';

describe('DetailQuittancePrimeComponent', () => {
  let component: DetailQuittancePrimeComponent;
  let fixture: ComponentFixture<DetailQuittancePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailQuittancePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailQuittancePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
