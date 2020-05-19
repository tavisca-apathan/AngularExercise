import {Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from '../services/app.htttp.service';

// Directive properties
// selector: the custom attribute name that will be applied on
// UI element. If the attribute is used for property binding then
// the selector will have proprty binding syntax [<SELECTOR-NAME>]

// use the following classes for HTML Element Reference and the Rendering
// ElementRef: Class to refer HTML element to apply directive
// Renderer2 : Class to define rendering based on the directive

@Directive({
  selector: '[checkProduct]'
})
export class UniqueProductDirective {
   constructor(private ele: ElementRef, private renderer: Renderer2, private httpService : HttpService){
   }

   // define input property for the directive that will accept data
   // from HTML element using Property Binding
   // IMP** --> This property must map with directive selector
   // e.g. <div [setColor]="<value>"></div>

   @Input('checkProduct') prdId: string;

   // logic for directive
   private applyColor(): void {
     this.httpService.get().subscribe((data) =>
       {
        if(data.some(d => d.ProductId == this.prdId ))
        {
          this.renderer.setStyle(this.ele.nativeElement, 'border' , 'solid 3px red');
        }
        else
        {
          this.renderer.setStyle(this.ele.nativeElement, 'border' , 'solid 3px green');
        }
      })
   }

   @HostListener('blur') onBlur() {
    this.applyColor();
  }
  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.renderer.setStyle(this.ele.nativeElement, 'border' , 'solid 3px yellow');
  //}

   // host events inside the directive those will cause the
   // directive to be executed / activated and its logic to execute
}
