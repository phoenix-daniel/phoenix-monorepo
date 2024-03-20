import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';


export interface NewsDataType {
  id?: string;
  title?: string;
  description?: string;
}
@Component({
  selector: 'phoenix-dashboard-card',
  standalone: true,
  imports: [CommonModule, NxCardModule, NxHeadlineModule, NxCopytextModule, NxSpinnerModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css',
  providers: [HttpClient]
})
export class DashboardCardComponent implements OnInit{

  @Input() id: string = ''
  @Input() apiNewsUrl = ''

  newsData: NewsDataType = {}
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getNews(this.id)
  }

  getNews(id: string) {
    this.httpClient.get<NewsDataType>(this.apiNewsUrl + '/' + id)
      .pipe(delay(500 * Number(id)))
      .subscribe( data =>
        this.newsData = data
      )
  }

}
