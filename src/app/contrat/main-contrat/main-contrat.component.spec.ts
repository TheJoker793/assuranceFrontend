import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContratComponent } from './main-contrat.component';

describe('MainContratComponent', () => {
  let component: MainContratComponent;
  let fixture: ComponentFixture<MainContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
