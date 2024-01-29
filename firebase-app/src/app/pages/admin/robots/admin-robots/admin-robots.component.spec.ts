import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRobotsComponent } from './admin-robots.component';

describe('AdminRobotsComponent', () => {
  let component: AdminRobotsComponent;
  let fixture: ComponentFixture<AdminRobotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRobotsComponent]
    });
    fixture = TestBed.createComponent(AdminRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
