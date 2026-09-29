import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';

const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
/** Scroll distance (px) before the button appears. */
const SHOW_AFTER = 400;

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()',
  },
})
export class BackToTop {
  private readonly doc = inject(DOCUMENT);

  protected readonly radius = RADIUS;
  protected readonly circumference = CIRCUMFERENCE;
  protected readonly scrollY = signal(0);
  protected readonly progress = signal(0);

  protected readonly visible = computed(() => this.scrollY() > SHOW_AFTER);
  protected readonly dashOffset = computed(() => CIRCUMFERENCE * (1 - this.progress()));

  protected onScroll(): void {
    const el = this.doc.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    this.scrollY.set(el.scrollTop);
    this.progress.set(max > 0 ? Math.min(el.scrollTop / max, 1) : 0);
  }

  protected toTop(): void {
    const reduce = this.doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.doc.defaultView?.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
}
