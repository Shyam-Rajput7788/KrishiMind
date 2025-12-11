import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureProducts } from './agriculture-products';

describe('AgricultureProducts', () => {
  let component: AgricultureProducts;
  let fixture: ComponentFixture<AgricultureProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricultureProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
