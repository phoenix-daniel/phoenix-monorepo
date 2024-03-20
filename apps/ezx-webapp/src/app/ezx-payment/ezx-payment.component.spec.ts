import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzxPaymentComponent } from './ezx-payment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EzxPaymentComponent', () => {
  let component: EzxPaymentComponent;
  let fixture: ComponentFixture<EzxPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzxPaymentComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EzxPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
