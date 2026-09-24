import { Component } from '@angular/core';
import { PROFILES } from '../../data/site-content';
import { PageHero } from '../../shared/page-hero/page-hero';
import { TeamCards } from '../../shared/team-cards/team-cards';

@Component({
  selector: 'app-team',
  imports: [PageHero, TeamCards],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly profiles = PROFILES;
}
