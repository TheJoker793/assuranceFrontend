import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssureurComponent } from './main-assureur.component';

describe('MainAssureurComponent', () => {
  let component: MainAssureurComponent;
  let fixture: ComponentFixture<MainAssureurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainAssureurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAssureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
