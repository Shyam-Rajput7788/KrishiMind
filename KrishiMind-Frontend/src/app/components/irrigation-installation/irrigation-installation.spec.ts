import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationInstallation } from './irrigation-installation';

describe('IrrigationInstallation', () => {
  let component: IrrigationInstallation;
  let fixture: ComponentFixture<IrrigationInstallation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationInstallation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationInstallation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
