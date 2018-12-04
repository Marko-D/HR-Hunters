import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { mimeType } from "src/app/validators/mime-type.validator";
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  authError;
  private authErrorStatusSub: Subscription;

  validPhonenumber = new RegExp("^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$");

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) { }
 
  ngOnInit() {
   
    this.authErrorStatusSub = this.authService.getAuthErrorStatusListener().subscribe(error => {
      this.authError = error.email;
    })
}

clientProfileFormHP = this.fb.group({
  companyname: [
    "",
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.pattern("[a-zA-Z0-9]*")
    ])
  ],

  phonenumber: [
    "",
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.pattern(this.validPhonenumber)
     
    ]) 
  ]

 })

loginForm = this.fb.group({
  email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.email])]
  
})


ngOnDestroy() {
  this.authErrorStatusSub.unsubscribe();
}
}
