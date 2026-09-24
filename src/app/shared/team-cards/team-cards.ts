import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILES } from '../../data/site-content';

@Component({
  selector: 'app-team-cards',
  imports: [RouterLink],
  templateUrl: './team-cards.html',
  styleUrl: './team-cards.scss',
})
export class TeamCards {
  protected readonly profiles = PROFILES;
}
