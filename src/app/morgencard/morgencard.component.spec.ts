import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgencardComponent } from './morgencard.component';

describe('MorgencardComponent', () => {
  let component: MorgencardComponent;
  let fixture: ComponentFixture<MorgencardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorgencardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgencardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
