import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemePanel } from '../../shared/theme-panel/theme-panel';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, ThemePanel],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { path: '/', label: 'About Us', exact: true },
    { path: '/team', label: 'Our Team', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
}
