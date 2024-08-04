import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoliceComponent } from './main-police.component';

describe('MainPoliceComponent', () => {
  let component: MainPoliceComponent;
  let fixture: ComponentFixture<MainPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPoliceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
