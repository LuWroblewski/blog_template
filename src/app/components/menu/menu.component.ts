import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { WorksComponent } from '../works/works.component';
import { ContactComponent } from '../contact/contact.component';

import { lucideAlignJustify, lucideLinkedin } from '@ng-icons/lucide';
import { tdesignLogoBehance } from '@ng-icons/tdesign-icons';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menu',
  imports: [NgIcon, HomeComponent, AboutComponent, WorksComponent, ContactComponent, FooterComponent],
  viewProviders: [provideIcons({ lucideAlignJustify, lucideLinkedin, tdesignLogoBehance })],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
