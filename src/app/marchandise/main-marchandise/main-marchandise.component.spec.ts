import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMarchandiseComponent } from './main-marchandise.component';

describe('MainMarchandiseComponent', () => {
  let component: MainMarchandiseComponent;
  let fixture: ComponentFixture<MainMarchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMarchandiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMarchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
