import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
}
