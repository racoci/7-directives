import { Directive } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true
})
export class SafeLinkDirective {

  constructor() { }

}
