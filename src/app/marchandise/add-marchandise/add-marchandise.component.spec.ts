import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarchandiseComponent } from './add-marchandise.component';

describe('AddMarchandiseComponent', () => {
  let component: AddMarchandiseComponent;
  let fixture: ComponentFixture<AddMarchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMarchandiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMarchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
