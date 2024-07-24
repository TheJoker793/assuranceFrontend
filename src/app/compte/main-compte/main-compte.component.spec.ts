import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompteComponent } from './main-compte.component';

describe('MainCompteComponent', () => {
  let component: MainCompteComponent;
  let fixture: ComponentFixture<MainCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
