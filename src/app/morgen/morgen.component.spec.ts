import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgenComponent } from './morgen.component';

describe('MorgenComponent', () => {
  let component: MorgenComponent;
  let fixture: ComponentFixture<MorgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
