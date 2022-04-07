import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit{
  @Input() appHasRole: string[];

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService) {}

    ngOnInit(): void {
      const isAuthorized = this.accountService.isAuthorized('Role', this.appHasRole);
      if (!isAuthorized) {
        this.viewContainerRef.clear();
      } else {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }
}
