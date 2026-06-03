import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTeste } from './tela-teste';

describe('TelaTeste', () => {
  let component: TelaTeste;
  let fixture: ComponentFixture<TelaTeste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaTeste],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaTeste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
