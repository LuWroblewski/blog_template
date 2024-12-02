import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerStars } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-home',
  imports: [NgIcon],
  viewProviders: [provideIcons({ tablerStars })],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
