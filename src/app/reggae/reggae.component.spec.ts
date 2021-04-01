import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReggaeComponent } from './reggae.component';

describe('ReggaeComponent', () => {
  let component: ReggaeComponent;
  let fixture: ComponentFixture<ReggaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReggaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReggaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
