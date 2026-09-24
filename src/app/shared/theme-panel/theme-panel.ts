import { Component, ElementRef, inject, signal } from '@angular/core';
import { CUSTOM_PRESET_ID, Palette, ThemeMode, ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-theme-panel',
  templateUrl: './theme-panel.html',
  styleUrl: './theme-panel.scss',
  host: {
    '(document:keydown.escape)': 'close()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class ThemePanel {
  protected readonly theme = inject(ThemeService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly open = signal(false);
  protected readonly customId = CUSTOM_PRESET_ID;

  protected readonly modes: { id: ThemeMode; label: string }[] = [
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
    { id: 'system', label: 'Auto' },
  ];

  protected readonly colorFields: { key: keyof Palette; label: string; hint: string }[] = [
    { key: 'primary', label: 'Primary', hint: 'Buttons, links, footer' },
    { key: 'accent', label: 'Accent', hint: 'Highlights and chips' },
    { key: 'highlight', label: 'Ring', hint: 'Decorative outlines' },
  ];

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.host.nativeElement.contains(event.target as Node)) this.close();
  }

  protected onColor(key: keyof Palette, event: Event): void {
    this.theme.setColor(key, (event.target as HTMLInputElement).value);
  }
}
