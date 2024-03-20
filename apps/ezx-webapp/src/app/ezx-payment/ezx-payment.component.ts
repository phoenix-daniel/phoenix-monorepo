import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from '@phoenix/dashboard-card';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxProgressStepperModule } from '@aposin/ng-aquila/progress-stepper';
import { NxMaskModule } from '@aposin/ng-aquila/mask';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { PaymentComponent } from '@phoenix/payment';
import { EzxHeaderComponent } from '../shared/components/ezx-header/ezx-header.component';
import { EzxFooterComponent } from '../shared/components/ezx-footer/ezx-footer.component';

@Component({
  selector: 'phoenix-ezx-payment',
  standalone: true,
  imports: [CommonModule, DashboardCardComponent, NxBreadcrumbModule, NxGridModule, NxProgressStepperModule, NxMaskModule, NxButtonModule, RouterLink, ReactiveFormsModule, FormsModule, NxInputModule, NxIconModule, PaymentComponent, EzxHeaderComponent, EzxFooterComponent],
  templateUrl: './ezx-payment.component.html',
  styleUrl: './ezx-payment.component.css',
})
export class EzxPaymentComponent {
  items = [
    {href: '', name:'Dashboard'},
    {href: '#', name:'Payment'}
  ]
}
