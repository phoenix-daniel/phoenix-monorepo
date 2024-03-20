import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzxHeaderComponent } from './ezx-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EzxHeaderComponent', () => {
  let component: EzxHeaderComponent;
  let fixture: ComponentFixture<EzxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzxHeaderComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EzxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
