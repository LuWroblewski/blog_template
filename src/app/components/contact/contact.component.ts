import { Component } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { tdesignLogoBehance } from '@ng-icons/tdesign-icons';

@Component({
  selector: 'app-contact',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideAlignJustify, lucideLinkedin, tdesignLogoBehance, lucideMail })],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
