import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@phoenix/footer';
import { HeaderComponent } from '@phoenix/header';
import { NxIconModule } from '@aposin/ng-aquila/icon';

@Component({
  standalone: true,
  imports: [RouterModule, NxIconModule, FooterComponent, HeaderComponent],
  selector: 'phoenix-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
