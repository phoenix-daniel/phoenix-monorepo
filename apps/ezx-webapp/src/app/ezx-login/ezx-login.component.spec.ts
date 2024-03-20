import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzxLoginComponent } from './ezx-login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EzxLoginComponent', () => {
  let component: EzxLoginComponent;
  let fixture: ComponentFixture<EzxLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzxLoginComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EzxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
