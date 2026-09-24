import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { ThemeService } from './core/theme.service';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the site navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = [...(fixture.nativeElement as HTMLElement).querySelectorAll('nav[aria-label="Main"] a')];
    expect(links.map((a) => a.textContent?.trim())).toEqual(['About Us', 'Our Team', 'Contact']);
  });
});

describe('ThemeService', () => {
  beforeEach(() => localStorage.clear());

  it('applies logo colours by default and switches to a custom palette on edit', () => {
    const theme = TestBed.inject(ThemeService);
    TestBed.tick();
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--brand')).toBe('#c03426');

    theme.setColor('primary', '#123456');
    TestBed.tick();
    expect(theme.presetId()).toBe('custom');
    expect(root.style.getPropertyValue('--brand')).toBe('#123456');
    expect(root.style.getPropertyValue('--accent')).toBe('#b2db00');
    expect(root.style.getPropertyValue('--on-brand')).toBe('#ffffff');
  });

  it('honours an explicit dark mode', () => {
    const theme = TestBed.inject(ThemeService);
    theme.setMode('dark');
    TestBed.tick();
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
});
