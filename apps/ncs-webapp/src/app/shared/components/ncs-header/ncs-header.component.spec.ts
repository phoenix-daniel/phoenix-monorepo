import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcsHeaderComponent } from './ncs-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NcsHeaderComponent', () => {
  let component: NcsHeaderComponent;
  let fixture: ComponentFixture<NcsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NcsHeaderComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(NcsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
