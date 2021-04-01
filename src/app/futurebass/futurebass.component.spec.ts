import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturebassComponent } from './futurebass.component';

describe('FuturebassComponent', () => {
  let component: FuturebassComponent;
  let fixture: ComponentFixture<FuturebassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturebassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturebassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
