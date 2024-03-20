import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@phoenix/footer';

@Component({
  selector: 'phoenix-ncs-footer',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './ncs-footer.component.html',
  styleUrl: './ncs-footer.component.css',
})
export class NcsFooterComponent {}
