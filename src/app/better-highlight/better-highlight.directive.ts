import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostBinding( 'style.backgroundColor' ) backgroundColor: string = 'transparent';

  @HostListener( 'mouseenter' ) mouseover( eventData: Event ) {
    this.backgroundColor = 'blue';
    
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue',
    //   false,
    //   false
    // );
  }

  @HostListener( 'mouseleave' ) mouseleave( eventData: Event ) {
    this.backgroundColor = 'transparent';
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent',
    //   false,
    //   false
    // );
  }
}
