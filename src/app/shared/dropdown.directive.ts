import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 @HostBinding('class.open') isOpen = false;

 @HostListener('document:click', ['$event']) toggleOpen(event: Event) {

  //içinde element var mı diye bakıyor? bilmem gerekli mi?
  console.log(this.elRef.nativeElement.contains(event.target));
  this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}
constructor(private elRef: ElementRef) {}
}


//ilki

//dış tıklamasız çözüm
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
 
//   @HostListener('click') toggleOpen(){
//     this.isOpen = !this.isOpen;
//   }
//  }


//benimki

// export class DropdownDirective implements OnInit {
//   @Input() dropdownOpened : boolean;

//   constructor(private elRef: ElementRef, private renderer : Renderer2) { }
//   @HostListener('click') onclick(eventData: Event) {
//     if(!this.dropdownOpened)
//     {
//       this.renderer.addClass(this.elRef.nativeElement, "open");
//       this.dropdownOpened = true;

//     }    
//     else
//     {
//       this.renderer.removeClass(this.elRef.nativeElement, "open");  
//       this.dropdownOpened = false;
//     }
      
//   }

//   ngOnInit(){
//   this.dropdownOpened = false;
//   }
// }