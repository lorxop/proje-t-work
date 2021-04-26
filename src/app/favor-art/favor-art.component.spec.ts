import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorArtComponent } from './favor-art.component';

describe('FavorArtComponent', () => {
  let component: FavorArtComponent;
  let fixture: ComponentFixture<FavorArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
