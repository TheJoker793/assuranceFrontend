import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBienComponent } from './main-bien.component';

describe('MainBienComponent', () => {
  let component: MainBienComponent;
  let fixture: ComponentFixture<MainBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
