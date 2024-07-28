import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarchandisesComponent } from './list-marchandises.component';

describe('ListMarchandisesComponent', () => {
  let component: ListMarchandisesComponent;
  let fixture: ComponentFixture<ListMarchandisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMarchandisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMarchandisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
