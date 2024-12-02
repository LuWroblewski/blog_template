import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
