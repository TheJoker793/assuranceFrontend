import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQuittanceComponent } from './detail-quittance.component';

describe('DetailQuittanceComponent', () => {
  let component: DetailQuittanceComponent;
  let fixture: ComponentFixture<DetailQuittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailQuittanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailQuittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
