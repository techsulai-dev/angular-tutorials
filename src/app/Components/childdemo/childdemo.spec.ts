import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childdemo } from './childdemo';

describe('Childdemo', () => {
  let component: Childdemo;
  let fixture: ComponentFixture<Childdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childdemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Childdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
