import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { HeaderMenuType } from './header-menu.type';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxIconModule } from '@aposin/ng-aquila/icon';

@Component({
  selector: 'phoenix-header',
  standalone: true,
  imports: [CommonModule, NxHeaderModule, RouterLink, RouterLinkActive, NxLinkModule, NxButtonModule, NxImageModule, NgOptimizedImage, NxModalModule, NxHeadlineModule, NxCopytextModule, NxIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  @Input() appName = ''
  @Input() appMenus: HeaderMenuType[] = []
  @Input() userFullName: string = ''
  @Input() userGroups: string = ''
  @Input() userEntity: string = ''

  @Output() onLogout: EventEmitter<any> = new EventEmitter();


  logoutEmit () {
    this.onLogout.emit(this)
  }

}
