import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReglementComponent } from './detail-reglement.component';

describe('DetailReglementComponent', () => {
  let component: DetailReglementComponent;
  let fixture: ComponentFixture<DetailReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailReglementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
