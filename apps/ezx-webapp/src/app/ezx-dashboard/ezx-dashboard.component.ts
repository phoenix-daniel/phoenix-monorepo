import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import { RouterLink } from '@angular/router';
import { DashboardCardComponent } from '@phoenix/dashboard-card';
import { EzxHeaderComponent } from '../shared/components/ezx-header/ezx-header.component';
import { EzxFooterComponent } from '../shared/components/ezx-footer/ezx-footer.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'phoenix-ezx-dashboard',
  standalone: true,
  imports: [CommonModule, NxGridModule, NxBreadcrumbModule, RouterLink, DashboardCardComponent, EzxHeaderComponent, EzxFooterComponent],
  templateUrl: './ezx-dashboard.component.html',
  styleUrl: './ezx-dashboard.component.css',
})
export class EzxDashboardComponent {

  apiNewsUrl = environment.baseUrl + '/news'
  items = [
    {href: '', name:'Dashboard'}
  ]

}
