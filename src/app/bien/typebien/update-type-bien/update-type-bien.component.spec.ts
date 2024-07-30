import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeBienComponent } from './update-type-bien.component';

describe('UpdateTypeBienComponent', () => {
  let component: UpdateTypeBienComponent;
  let fixture: ComponentFixture<UpdateTypeBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTypeBienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTypeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
