import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcsNewsComponent } from './ncs-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NcsNewsComponent', () => {
  let component: NcsNewsComponent;
  let fixture: ComponentFixture<NcsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsNewsComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NcsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
