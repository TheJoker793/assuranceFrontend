import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssureurComponent } from './update-assureur.component';

describe('UpdateAssureurComponent', () => {
  let component: UpdateAssureurComponent;
  let fixture: ComponentFixture<UpdateAssureurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAssureurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAssureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
