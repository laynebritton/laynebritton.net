import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArchivedResumeComponent } from './archived-resume.component';

describe('ArchivedResumeComponent', () => {
  let component: ArchivedResumeComponent;
  let fixture: ComponentFixture<ArchivedResumeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
