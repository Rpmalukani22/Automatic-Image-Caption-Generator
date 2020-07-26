import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosectionComponent } from './videosection.component';

describe('VideosectionComponent', () => {
  let component: VideosectionComponent;
  let fixture: ComponentFixture<VideosectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
