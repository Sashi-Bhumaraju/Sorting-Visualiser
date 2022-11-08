import {AfterViewInit, Directive,ElementRef, Input} from '@angular/core'

@Directive({
	selector:'autofocus'
})
export class AutoFocus implements AfterViewInit{
@Input() appAutoFocus:boolean;
	constructor(
		private elementRef: ElementRef
	){}

	ngAfterViewInit(){
		this.elementRef.nativeElement.focus();
	}
}
