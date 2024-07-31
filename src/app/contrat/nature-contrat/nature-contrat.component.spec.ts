import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureContratComponent } from './nature-contrat.component';

describe('NatureContratComponent', () => {
  let component: NatureContratComponent;
  let fixture: ComponentFixture<NatureContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatureContratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NatureContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
