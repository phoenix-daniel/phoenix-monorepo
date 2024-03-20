import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@phoenix/footer';

@Component({
  selector: 'phoenix-ezx-footer',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './ezx-footer.component.html',
  styleUrl: './ezx-footer.component.css',
})
export class EzxFooterComponent {}
