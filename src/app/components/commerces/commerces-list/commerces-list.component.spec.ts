import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercesListComponent } from './commerces-list.component';

describe('CommercesListComponent', () => {
  let component: CommercesListComponent;
  let fixture: ComponentFixture<CommercesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
