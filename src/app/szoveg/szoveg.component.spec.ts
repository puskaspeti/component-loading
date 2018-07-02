import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzovegComponent } from './szoveg.component';

describe('SzovegComponent', () => {
  let component: SzovegComponent;
  let fixture: ComponentFixture<SzovegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzovegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzovegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
