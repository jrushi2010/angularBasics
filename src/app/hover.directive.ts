import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

 @Input()  color:string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    console.log(this.element)
  }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }

}