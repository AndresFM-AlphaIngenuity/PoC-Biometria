import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaFoto } from './tarjeta-foto';

describe('TarjetaFoto', () => {
  let component: TarjetaFoto;
  let fixture: ComponentFixture<TarjetaFoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaFoto],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaFoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
