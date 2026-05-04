import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricCaptureComponent } from './biometric-capture.component';

describe('BiometricCaptureComponent', () => {
  let component: BiometricCaptureComponent;
  let fixture: ComponentFixture<BiometricCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometricCaptureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BiometricCaptureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
