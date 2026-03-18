import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentdemo } from './parentdemo';

describe('Parentdemo', () => {
  let component: Parentdemo;
  let fixture: ComponentFixture<Parentdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentdemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Parentdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
