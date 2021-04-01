import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopevroComponent } from './topevro.component';

describe('TopevroComponent', () => {
  let component: TopevroComponent;
  let fixture: ComponentFixture<TopevroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopevroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopevroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
