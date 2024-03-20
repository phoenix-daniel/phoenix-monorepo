import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcsLoginComponent } from './ncs-login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NcsLoginComponent', () => {
  let component: NcsLoginComponent;
  let fixture: ComponentFixture<NcsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsLoginComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NcsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
