import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding( 'class.open' ) isOpen: boolean = false;

  constructor() { }

  @HostListener( 'click' ) onClick( eventData: Event ) {
    this.isOpen = !this.isOpen;
  }
}
