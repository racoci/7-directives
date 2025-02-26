import {Directive, effect, inject, Input, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "./auth.service";
import {Permission} from "./auth.model";

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  @Input({required: true, alias: "appAuth"}) userType !: Permission
  private authService = inject(AuthService);
  private template = inject(TemplateRef);
  private viewContainer =  inject(ViewContainerRef);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType) {
        this.viewContainer.createEmbeddedView(this.template);
      } else {
        this.viewContainer.clear()
      }
    });

  }
}
