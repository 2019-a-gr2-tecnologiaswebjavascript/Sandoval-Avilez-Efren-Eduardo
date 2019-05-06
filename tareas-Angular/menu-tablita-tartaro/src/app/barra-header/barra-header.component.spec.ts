import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHeaderComponent } from './barra-header.component';

describe('BarraHeaderComponent', () => {
  let component: BarraHeaderComponent;
  let fixture: ComponentFixture<BarraHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
