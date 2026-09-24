import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  template: `
    <section class="hero">
      <img class="hero__img" [src]="image()" alt="" fetchpriority="high" />
      <!-- <span class="hero__ring" aria-hidden="true"><span lang="hi">चर्चा</span></span> -->
      <div class="container hero__inner">
        <span class="eyebrow hero__eyebrow">{{ eyebrow() }}</span>
        <h1>
          {{ title() }}
          @if (titleAccent()) {
            <em class="hero__accent">{{ titleAccent() }}</em>{{ titleAfter() }}
          }
        </h1>
        @if (lead()) {
          <p class="hero__lead">{{ lead() }}</p>
        }
        <ng-content />
      </div>
    </section>
  `,
  styleUrl: './page-hero.scss',
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  /** Optional trailing words rendered in the brand colour, e.g. "conversation". */
  readonly titleAccent = input<string>();
  /** Optional text after the accent, e.g. ", not clutter." */
  readonly titleAfter = input<string>();
  readonly lead = input<string>();
  readonly image = input.required<string>();
}
