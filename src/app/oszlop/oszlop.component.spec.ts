import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OszlopComponent } from './oszlop.component';

describe('OszlopComponent', () => {
  let component: OszlopComponent;
  let fixture: ComponentFixture<OszlopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OszlopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OszlopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
