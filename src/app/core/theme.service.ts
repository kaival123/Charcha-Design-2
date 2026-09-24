import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface Palette {
  primary: string;
  accent: string;
  highlight: string;
}

export interface ThemePreset extends Palette {
  id: string;
  name: string;
}

/** The first preset is sampled from the Charcha Live logo. */
export const THEME_PRESETS: readonly ThemePreset[] = [
  { id: 'charcha', name: 'Charcha', primary: '#c03426', accent: '#b2db00', highlight: '#f2e21b' },
  { id: 'saffron', name: 'Saffron', primary: '#c2410c', accent: '#f59f00', highlight: '#ffe066' },
  { id: 'peacock', name: 'Peacock', primary: '#0b7285', accent: '#40c057', highlight: '#ffd43b' },
  { id: 'indigo', name: 'Indigo', primary: '#3b3fb6', accent: '#f783ac', highlight: '#ffd43b' },
  { id: 'earth', name: 'Earth', primary: '#7c4a21', accent: '#a3b18a', highlight: '#e9c46a' },
];

export const CUSTOM_PRESET_ID = 'custom';

const STORAGE_KEY = 'charcha.theme';

interface StoredTheme {
  mode: ThemeMode;
  presetId: string;
  custom: Palette;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly media = this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');

  readonly presets = THEME_PRESETS;
  readonly mode = signal<ThemeMode>('system');
  readonly presetId = signal<string>(THEME_PRESETS[0].id);
  readonly custom = signal<Palette>(pickPalette(THEME_PRESETS[0]));

  private readonly systemDark = signal(this.media?.matches ?? false);

  readonly isDark = computed(() =>
    this.mode() === 'system' ? this.systemDark() : this.mode() === 'dark',
  );

  readonly palette = computed<Palette>(() => {
    if (this.presetId() === CUSTOM_PRESET_ID) return this.custom();
    return this.presets.find((p) => p.id === this.presetId()) ?? this.presets[0];
  });

  constructor() {
    this.restore();
    this.media?.addEventListener('change', (e) => this.systemDark.set(e.matches));
    effect(() => this.apply(this.palette(), this.isDark()));
    effect(() => this.persist());
  }

  setMode(mode: ThemeMode): void {
    this.mode.set(mode);
  }

  setPreset(id: string): void {
    this.presetId.set(id);
  }

  /** Editing a colour switches to the custom palette, seeded from whatever is active. */
  setColor(key: keyof Palette, value: string): void {
    const base = this.palette();
    this.custom.set({ ...base, [key]: value });
    this.presetId.set(CUSTOM_PRESET_ID);
  }

  reset(): void {
    this.mode.set('system');
    this.presetId.set(THEME_PRESETS[0].id);
    this.custom.set(pickPalette(THEME_PRESETS[0]));
  }

  private apply(p: Palette, dark: boolean): void {
    const root = this.doc.documentElement;
    root.dataset['theme'] = dark ? 'dark' : 'light';
    root.style.setProperty('--brand', p.primary);
    root.style.setProperty('--accent', p.accent);
    root.style.setProperty('--highlight', p.highlight);
    root.style.setProperty('--on-brand', readableOn(p.primary));
    root.style.setProperty('--on-accent', readableOn(p.accent));
    root.style.setProperty('--on-highlight', readableOn(p.highlight));
    this.doc.querySelector('meta[name="theme-color"]')?.setAttribute('content', p.primary);
  }

  private restore(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as Partial<StoredTheme>;
      if (saved.mode === 'light' || saved.mode === 'dark' || saved.mode === 'system') {
        this.mode.set(saved.mode);
      }
      if (saved.custom && isPalette(saved.custom)) this.custom.set(saved.custom);
      const known =
        saved.presetId === CUSTOM_PRESET_ID || this.presets.some((p) => p.id === saved.presetId);
      if (saved.presetId && known) this.presetId.set(saved.presetId);
    } catch {
      // Storage unavailable or corrupt: keep defaults.
    }
  }

  private persist(): void {
    const data: StoredTheme = { mode: this.mode(), presetId: this.presetId(), custom: this.custom() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Storage unavailable: theme still applies for this visit.
    }
  }
}

function pickPalette({ primary, accent, highlight }: Palette): Palette {
  return { primary, accent, highlight };
}

function isPalette(value: Partial<Palette>): value is Palette {
  const hex = /^#[0-9a-f]{6}$/i;
  return [value.primary, value.accent, value.highlight].every((v) => hex.test(v ?? ''));
}

/** Picks near-white or near-black text, whichever contrasts more with the background. */
function readableOn(hex: string): string {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const contrastWhite = 1.05 / (luminance + 0.05);
  const contrastDark = (luminance + 0.05) / 0.0625; // #1c1b18 ≈ 0.0125 luminance
  return contrastWhite >= contrastDark ? '#ffffff' : '#1c1b18';
}
