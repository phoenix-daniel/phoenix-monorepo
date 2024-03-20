import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcsDashboardComponent } from './ncs-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NcsDashboardComponent', () => {
  let component: NcsDashboardComponent;
  let fixture: ComponentFixture<NcsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsDashboardComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NcsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
