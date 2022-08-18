import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoJobsComponent } from './no-jobs.component';

describe('NoJobsComponent', () => {
  let component: NoJobsComponent;
  let fixture: ComponentFixture<NoJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
