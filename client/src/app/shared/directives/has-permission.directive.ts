import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit{
  @Input() appHasPermission: string[];

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService) {}

    ngOnInit(): void {
      const isAuthorized = this.accountService.isAuthorized('Permission', this.appHasPermission);
      if (!isAuthorized) {
        this.viewContainerRef.clear();
      } else {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }
}
