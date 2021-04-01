import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopusaComponent } from './topusa.component';

describe('TopusaComponent', () => {
  let component: TopusaComponent;
  let fixture: ComponentFixture<TopusaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopusaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
