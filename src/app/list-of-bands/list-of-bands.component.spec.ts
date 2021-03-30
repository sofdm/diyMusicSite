import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBandsComponent } from './list-of-bands.component';

describe('ListOfBandsComponent', () => {
  let component: ListOfBandsComponent;
  let fixture: ComponentFixture<ListOfBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
