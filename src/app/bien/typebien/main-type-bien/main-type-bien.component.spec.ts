import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTypeBienComponent } from './main-type-bien.component';

describe('MainTypeBienComponent', () => {
  let component: MainTypeBienComponent;
  let fixture: ComponentFixture<MainTypeBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTypeBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTypeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
