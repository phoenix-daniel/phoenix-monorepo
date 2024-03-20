import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from '@phoenix/dashboard-card';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NcsHeaderComponent } from '../shared/components/ncs-header/ncs-header.component';
import { NcsFooterComponent } from '../shared/components/ncs-footer/ncs-footer.component';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'phoenix-ncs-news',
  standalone: true,
  imports: [CommonModule, DashboardCardComponent, NxBreadcrumbModule, NxGridModule, NcsHeaderComponent, NcsFooterComponent, RouterLink],
  templateUrl: './ncs-news.component.html',
  styleUrl: './ncs-news.component.css',
})
export class NcsNewsComponent {

  apiNewsUrl  = environment.baseUrl + '/news'
  items = [
    {href: '', name:'Dashboard'},
    {href: '#', name:'News'},
  ]

}
