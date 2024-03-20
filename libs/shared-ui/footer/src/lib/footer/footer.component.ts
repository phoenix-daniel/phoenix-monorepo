import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { RouterLink } from '@angular/router';
import { NxGridModule } from '@aposin/ng-aquila/grid';

@Component({
  selector: 'phoenix-footer',
  standalone: true,
  imports: [CommonModule, NxFooterModule, RouterLink, NxGridModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
