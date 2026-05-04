import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHuella } from './tarjeta-huella';

describe('TarjetaHuella', () => {
  let component: TarjetaHuella;
  let fixture: ComponentFixture<TarjetaHuella>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaHuella],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaHuella);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
