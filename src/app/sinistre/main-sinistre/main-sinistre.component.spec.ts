import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSinistreComponent } from './main-sinistre.component';

describe('MainSinistreComponent', () => {
  let component: MainSinistreComponent;
  let fixture: ComponentFixture<MainSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSinistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
