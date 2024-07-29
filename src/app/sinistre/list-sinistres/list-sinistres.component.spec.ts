import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSinistresComponent } from './list-sinistres.component';

describe('ListSinistresComponent', () => {
  let component: ListSinistresComponent;
  let fixture: ComponentFixture<ListSinistresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSinistresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSinistresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
