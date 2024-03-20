import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { RouterLink } from '@angular/router';
import { PieChartModule } from '@swimlane/ngx-charts';
import { ChartComponent } from '@phoenix/chart';
import { EzxHeaderComponent } from '../shared/components/ezx-header/ezx-header.component';
import { EzxFooterComponent } from '../shared/components/ezx-footer/ezx-footer.component';

@Component({
  selector: 'phoenix-ezx-statistic',
  standalone: true,
  imports: [CommonModule, NxBreadcrumbModule, NxButtonModule, NxGridModule, RouterLink, PieChartModule, ChartComponent, EzxHeaderComponent, EzxFooterComponent],
  templateUrl: './ezx-statistic.component.html',
  styleUrl: './ezx-statistic.component.css',
})
export class EzxStatisticComponent {
  items = [
    {href: '', name:'Dashboard'},
    {href: '#', name:'Statistic'}
  ]

}
