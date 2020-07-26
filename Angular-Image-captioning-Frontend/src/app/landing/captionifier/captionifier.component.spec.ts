import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionifierComponent } from './captionifier.component';

describe('CaptionifierComponent', () => {
  let component: CaptionifierComponent;
  let fixture: ComponentFixture<CaptionifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptionifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
