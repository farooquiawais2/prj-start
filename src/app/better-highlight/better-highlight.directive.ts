import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {
  }
  
  @Input() defaultColor: string = "transparent";
  @Input( 'appBetterHighlight' ) highlightColor: string = "blue";
  @HostBinding( 'style.backgroundColor' ) backgroundColor: string = this.defaultColor;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener( 'mouseenter' ) mouseover( eventData: Event ) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener( 'mouseleave' ) mouseleave( eventData: Event ) {
    this.backgroundColor = this.defaultColor;
  }
}
