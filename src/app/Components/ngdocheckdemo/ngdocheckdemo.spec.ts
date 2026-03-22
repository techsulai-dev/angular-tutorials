import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngdocheckdemo } from './ngdocheckdemo';

describe('Ngdocheckdemo', () => {
  let component: Ngdocheckdemo;
  let fixture: ComponentFixture<Ngdocheckdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngdocheckdemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngdocheckdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
