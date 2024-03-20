import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcsFooterComponent } from './ncs-footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NcsFooterComponent', () => {
  let component: NcsFooterComponent;
  let fixture: ComponentFixture<NcsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsFooterComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NcsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
