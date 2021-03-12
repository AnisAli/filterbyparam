 import { Directive, Input, OnInit } from '@angular/core';
 import { ControlContainer, NgControl } from '@angular/forms';

 @Directive({
  selector: '[appBindQueryParamDirective]',
})
export class BindQueryParamDirectiveDirective implements OnInit {
  @Input('appBindQueryParamDirective') paramKey: string;

  constructor(private ngControl: NgControl) {}

  ngOnInit(): void {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.has(this.paramKey)) {
      this.ngControl.control.patchValue(queryParams.get(this.paramKey));
    }
  }
}


// @Directive({
//   selector: '[appBindQueryParamDirective]'
// })
// export class BindQueryParamDirectiveDirective implements OnInit {

//   constructor(private ngControl: ControlContainer) {}

//   ngOnInit(): void {
//     if (location.search) {
//       const queryParams = new URLSearchParams(location.search);
//       console.log(queryParams);
//       //  const value = Object.fromEntries(queryParams.entries);
//       // this.ngControl.control.patchValue(value);
//     }
//   }

// }


// import { Directive, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
