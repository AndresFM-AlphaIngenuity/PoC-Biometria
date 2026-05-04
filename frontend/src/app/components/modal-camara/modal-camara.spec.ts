import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCamara } from './modal-camara';

describe('ModalCamara', () => {
  let component: ModalCamara;
  let fixture: ComponentFixture<ModalCamara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCamara],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCamara);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
