import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public otpSent: boolean = false
  public phoneNumber: any;
  public otp: any;
  public recaptchaVerifier: any;
  public confirmationResult: firebase.auth.ConfirmationResult;
  constructor(private router:Router) { }

  signIn() {
    this.confirmationResult.confirm(this.otp).then(user => {
      console.log(user)
    })
  }

  onChangeNumber(value){
    this.phoneNumber=value;
  }

  onChangeOtp(value){
    this.otp=value;
  }
  sendOtp() {
    firebase.auth().signInWithPhoneNumber('+91' + this.phoneNumber, this.recaptchaVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        this.otpSent = true;
        this.router.navigate(["/home"]);
      }).catch(err => {
        console.log(err)
      })
  }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible'
    });
  }

}
