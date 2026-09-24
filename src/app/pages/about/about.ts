import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT, SECTIONS } from '../../data/site-content';
import { PageHero } from '../../shared/page-hero/page-hero';
import { TeamCards } from '../../shared/team-cards/team-cards';

@Component({
  selector: 'app-about',
  imports: [PageHero, RouterLink, TeamCards],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = ABOUT;
  protected readonly topics = SECTIONS.filter((s) => !s.tag);
  protected readonly specials = SECTIONS.filter((s) => s.tag);
}
