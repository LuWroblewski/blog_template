import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify, lucideGithub, lucideLinkedin } from '@ng-icons/lucide';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-menu',
  imports: [NgIcon, HomeComponent, AboutComponent, WorksComponent],
  viewProviders: [provideIcons({ lucideAlignJustify, lucideGithub, lucideLinkedin })],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
