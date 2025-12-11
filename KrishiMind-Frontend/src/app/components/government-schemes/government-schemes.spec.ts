import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentSchemes } from './government-schemes';

describe('GovernmentSchemes', () => {
  let component: GovernmentSchemes;
  let fixture: ComponentFixture<GovernmentSchemes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentSchemes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentSchemes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
