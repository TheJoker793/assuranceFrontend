import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssureurComponent } from './add-assureur.component';

describe('AddAssureurComponent', () => {
  let component: AddAssureurComponent;
  let fixture: ComponentFixture<AddAssureurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAssureurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAssureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
