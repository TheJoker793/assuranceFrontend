import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuittanceComponent } from './update-quittance.component';

describe('UpdateQuittanceComponent', () => {
  let component: UpdateQuittanceComponent;
  let fixture: ComponentFixture<UpdateQuittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateQuittanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateQuittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
