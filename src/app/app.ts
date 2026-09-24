import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme.service';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';

@Component({
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Injected here so the saved theme is applied as soon as the app boots.
  protected readonly theme = inject(ThemeService);

  constructor() {
    // Keep fragment targets (e.g. /team#pradip-bagchi) clear of the sticky header.
    inject(ViewportScroller).setOffset([0, 72]);
  }
}
