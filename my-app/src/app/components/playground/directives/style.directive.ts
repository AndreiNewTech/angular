import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') step = '';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseHover() {
    this.el.nativeElement.style.backgroundColor = this.step;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('mouse leave');
    this.el.nativeElement.style.backgroundColor = 'initial';
  }

  ngOnInit() {}
}
