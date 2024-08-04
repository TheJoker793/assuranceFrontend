import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPolicesComponent } from './all-polices.component';

describe('AllPolicesComponent', () => {
  let component: AllPolicesComponent;
  let fixture: ComponentFixture<AllPolicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPolicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPolicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
