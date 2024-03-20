import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzxFooterComponent } from './ezx-footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EzxFooterComponent', () => {
  let component: EzxFooterComponent;
  let fixture: ComponentFixture<EzxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzxFooterComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EzxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
