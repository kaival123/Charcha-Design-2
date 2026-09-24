import { Component, signal } from '@angular/core';
import { CONTACT } from '../../data/site-content';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-contact',
  imports: [PageHero],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly sent = signal(false);

  // SVG path data for the channel icons (Material Symbols, 24px grid).
  protected readonly icons: Record<string, string> = {
    mail: 'M4 20q-.8 0-1.4-.6T2 18V6q0-.8.6-1.4T4 4h16q.8 0 1.4.6T22 6v12q0 .8-.6 1.4T20 20H4Zm8-7 8-5V6l-8 5-8-5v2l8 5Z',
    phone:
      'M19.95 21q-3.1 0-6.13-1.35t-5.5-3.83q-2.47-2.47-3.82-5.5T3.15 4.2q0-.5.3-.85T4.2 3h4.05q.35 0 .63.24t.32.56l.65 3.5q.05.4-.03.68t-.32.47L7.1 10.9q.6 1.1 1.43 2.13t1.82 1.97q.92.93 1.95 1.72t2.2 1.43l2.35-2.35q.22-.22.58-.33t.7-.07l3.45.7q.35.1.58.36t.22.59v4.05q0 .45-.35.75t-.85.3Z',
    pin: 'M12 12q.83 0 1.41-.59T14 10q0-.82-.59-1.41T12 8q-.82 0-1.41.59T10 10q0 .83.59 1.41T12 12Zm0 10q-4.03-3.43-6.01-6.37T4 10.2q0-3.75 2.41-5.98T12 2q3.18 0 5.59 2.22T20 10.2q0 2.5-1.99 5.43T12 22Z',
  };

  /**
   * There is no backend yet, so the form hands the message to the visitor's mail client.
   */
  protected submit(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    const subject = `[${field('topic')}] from ${field('name')}`;
    const body = `${field('message')}\n\n— ${field('name')} (${field('email')})`;
    window.location.href = `mailto:${this.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.sent.set(true);
    form.reset();
  }
}
