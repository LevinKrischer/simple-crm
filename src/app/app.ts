import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Toolbar } from './layout/toolbar/toolbar';
import { Sidenav } from "./layout/sidenav/sidenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, Toolbar, Sidenav],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('simple-crm');
}
