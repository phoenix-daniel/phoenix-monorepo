import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzxDashboardComponent } from './ezx-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EzxDashboardComponent', () => {
  let component: EzxDashboardComponent;
  let fixture: ComponentFixture<EzxDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzxDashboardComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EzxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
