import {Directive, ElementRef, inject, Input} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  @Input('appSafeLink') appSafeLink: string = "myapp";
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLink directive created');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const eventTarget = this.hostElement.nativeElement;
    const wantsToLeave = window.confirm(`Leave to ${eventTarget}`);
    if (wantsToLeave) {

      eventTarget.href += "?from=" + this.appSafeLink;
      return;
    }
    event.preventDefault();
  }
}
