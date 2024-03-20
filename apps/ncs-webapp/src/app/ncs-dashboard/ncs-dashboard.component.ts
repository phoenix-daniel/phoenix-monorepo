import { Component } from '@angular/core';
import { ChartComponent } from '@phoenix/chart';
import { RouterLink } from '@angular/router';
import { NcsHeaderComponent } from '../shared/components/ncs-header/ncs-header.component';
import { NcsFooterComponent } from '../shared/components/ncs-footer/ncs-footer.component';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'phoenix-ncs-dashboard',
  standalone: true,
  imports: [ChartComponent, RouterLink, NcsHeaderComponent, NcsFooterComponent, NxGridModule, NxBreadcrumbModule, NgForOf],
  templateUrl: './ncs-dashboard.component.html',
  styleUrl: './ncs-dashboard.component.css',
})
export class NcsDashboardComponent {
  items = [
    {href: '', name:'Dashboard'}
  ]
}
