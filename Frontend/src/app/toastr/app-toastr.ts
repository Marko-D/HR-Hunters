import { Component, OnInit, ViewChild } from '@angular/core';
 
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-toastr',
  template: `

  <div toastContainer></div>
`
// <h1><a (click)="onClick()">Click</a></h1>
})
export class AppToastrComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
 
  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    // this.toastrService.overlayContainer = this.toastContainer;
    this.toastrService.warning('Some error message')
    .onTap
        .subscribe(() => this.toasterClickedHandler());
  
  }
//   onClick() {
//     this.toastrService.success('Some error message');
//   }

// showSuccess() {

//     this.toastrService.success('Hello world!', 'This is success message');

// }

// showToaster() {
//     this.toastrService.success('Hello world!', 'Toastr fun!')
//       .onTap
//           .subscribe(() => this.toasterClickedHandler());
//   }
  
  toasterClickedHandler() {
    console.log('Toastr clicked');
  }
}