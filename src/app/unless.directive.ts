import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateRef: TemplateRef<any>, private vRef: ViewContainerRef) { }

  @Input() set appUnless( condition: boolean ) {
    if ( !condition ) {
     this.vRef.createEmbeddedView(this.templateRef)
    } else {
      this.vRef.clear();
   }
  }
}
