import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeBienComponent } from './add-type-bien.component';

describe('AddTypeBienComponent', () => {
  let component: AddTypeBienComponent;
  let fixture: ComponentFixture<AddTypeBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTypeBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTypeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
