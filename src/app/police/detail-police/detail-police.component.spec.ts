import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPoliceComponent } from './detail-police.component';

describe('DetailPoliceComponent', () => {
  let component: DetailPoliceComponent;
  let fixture: ComponentFixture<DetailPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPoliceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
