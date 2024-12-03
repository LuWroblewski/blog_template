import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
@Component({
  selector: 'app-about',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideStar })],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
