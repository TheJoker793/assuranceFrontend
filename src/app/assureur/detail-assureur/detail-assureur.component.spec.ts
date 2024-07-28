import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAssureurComponent } from './detail-assureur.component';

describe('DetailAssureurComponent', () => {
  let component: DetailAssureurComponent;
  let fixture: ComponentFixture<DetailAssureurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailAssureurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailAssureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
