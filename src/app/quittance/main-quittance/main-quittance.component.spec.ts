import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuittanceComponent } from './main-quittance.component';

describe('MainQuittanceComponent', () => {
  let component: MainQuittanceComponent;
  let fixture: ComponentFixture<MainQuittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainQuittanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainQuittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
