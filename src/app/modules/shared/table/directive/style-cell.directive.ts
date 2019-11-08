import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyleCell]'
})
export class StyleCellDirective {

  @Input() appStyleCell: string;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    if (this.appStyleCell === undefined) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'color',
        '#dcdcdc');
      this.renderer.setStyle(
        this.el.nativeElement,
        'text-align',
        'center');
    }
    if (typeof this.appStyleCell === 'number') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'text-align',
        'right');
    }
  }

}
