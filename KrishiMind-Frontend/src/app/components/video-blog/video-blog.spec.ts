import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBlog } from './video-blog';

describe('VideoBlog', () => {
  let component: VideoBlog;
  let fixture: ComponentFixture<VideoBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
