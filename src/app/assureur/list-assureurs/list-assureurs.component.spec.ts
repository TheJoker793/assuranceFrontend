import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssureursComponent } from './list-assureurs.component';

describe('ListAssureursComponent', () => {
  let component: ListAssureursComponent;
  let fixture: ComponentFixture<ListAssureursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAssureursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAssureursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
