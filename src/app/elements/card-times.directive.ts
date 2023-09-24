import { Directive, TemplateRef, ViewContainerRef, Input  } from '@angular/core';

@Directive({
  selector: '[appCardTimes]'
})
export class CardTimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }
  @Input('appCardTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {})
    }
  }
}
