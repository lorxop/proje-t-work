import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopartistComponent } from './popartist.component';

describe('PopartistComponent', () => {
  let component: PopartistComponent;
  let fixture: ComponentFixture<PopartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopartistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
