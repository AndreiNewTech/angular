import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractCountComponent } from './subtract-count.component';

describe('SubtractCountComponent', () => {
  let component: SubtractCountComponent;
  let fixture: ComponentFixture<SubtractCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtractCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
