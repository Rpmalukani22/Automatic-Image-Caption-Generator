import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprogressComponent } from './ourprogress.component';

describe('OurprogressComponent', () => {
  let component: OurprogressComponent;
  let fixture: ComponentFixture<OurprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
