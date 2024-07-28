import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarchandisesComponent } from './update-marchandises.component';

describe('UpdateMarchandisesComponent', () => {
  let component: UpdateMarchandisesComponent;
  let fixture: ComponentFixture<UpdateMarchandisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMarchandisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMarchandisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
