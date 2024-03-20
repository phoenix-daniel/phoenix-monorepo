import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzxStatisticComponent } from './ezx-statistic.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EzxStatisticComponent', () => {
  let component: EzxStatisticComponent;
  let fixture: ComponentFixture<EzxStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzxStatisticComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EzxStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
