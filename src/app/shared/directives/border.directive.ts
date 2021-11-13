import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective implements OnInit {
  @Input() creationDate!: Date;

  private currentDate = new Date();
  private minusTwoWeeks = new Date(+new Date - 12096e5);

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
   }

  ngOnInit() {
    this.setBorderForElement();
  }

  private setBorderForElement(): void {
    if(this.creationDate < this.currentDate && this.creationDate >= this.minusTwoWeeks){
        this.renderer.setStyle(this.elementRef.nativeElement.firstChild, 'border', '3px solid green');
    } else if (this.creationDate > this.currentDate){
        this.renderer.setStyle(this.elementRef.nativeElement.firstChild, 'border', '3px solid blue');
        return;
    }
  }
}
