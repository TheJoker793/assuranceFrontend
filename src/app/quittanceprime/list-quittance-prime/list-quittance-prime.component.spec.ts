import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuittancePrimeComponent } from './list-quittance-prime.component';

describe('ListQuittancePrimeComponent', () => {
  let component: ListQuittancePrimeComponent;
  let fixture: ComponentFixture<ListQuittancePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListQuittancePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListQuittancePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
