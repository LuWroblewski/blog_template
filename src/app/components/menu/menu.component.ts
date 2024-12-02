import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify, lucideGithub, lucideLinkedin } from '@ng-icons/lucide';

@Component({
  selector: 'app-menu',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideAlignJustify, lucideGithub, lucideLinkedin })],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
