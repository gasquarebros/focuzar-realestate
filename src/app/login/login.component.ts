import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title;

  loginForm: FormGroup;
  otpForm: FormGroup;

  public showSignup = false;
  public showSupport = false;
  public showOtp = false;
  public resendOtpBehavior = false;

  counter: any = 0;
  timer: any;

  public error: any;
  public isProcessing = false;
  public success: any;
  public successType: any;

  get mobile(): any { return this.loginForm.get('mobile'); }
  get otp(): any { return this.otpForm.get('otp'); }

  constructor(
    private fb: FormBuilder,
    private apiService: AppService,
    private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.title = 'Sign In';
    this.loginForm = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9]+$')
      ]),
    });

    this.otpForm = new FormGroup({
      otp: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[0-9]+$')
      ]),
    });
  }

  closePopup(): void {
    if (this.showSupport || this.showSignup) {
      this.showSupport = false;
      this.showSignup = false;
      this.title = 'Sign In';
    } else {
      this.dialogRef.closeAll();
    }
  }

  openSignup(): void {
    this.title = 'Sign Up';
    this.showSignup = true;
    this.showSupport = false;
    this.showOtp = false;
  }

  onLogin(): void {
    this.error = '';
    if (this.loginForm.valid) {
      this.isProcessing = true;
      const phone = this.loginForm.get('mobile').value;
      const URL = 'api/validatephone/' + phone;
      this.apiService.doPost(URL, {}).subscribe((data) => {
        this.showOtpSection();
        //this.isProcessing = false;
      },
      err => {
        console.log(err);
       // check error status code is 500, if so, do some action
        this.error = 'You are not registered user, Kindly sign up to view Immersive Zone';
        this.isProcessing = false;
      });
    }
  }

  openSupport(): void {
    this.showSupport = true;
    this.showSignup = false;
    this.showOtp = false;
    this.title = 'Support Query';
  }

  showOtpSection(): void {
    this.showOtp = true;
    this.showSupport = false;
    this.showSignup = false;
    this.success = '';
    this.title = 'Enter One Time Password to Proceed';
  }

  resendOtp(): void {
    this.resendOtpBehavior = true;
    this.counter = 60;
    this.timer = setInterval(() => {
      this.counter = --this.counter;
      if (this.counter === 0) {
        this.resendOtpBehavior = false;
        this.unsubscribeTimer();
      }
    }, 1000);
  }

  unsubscribeTimer(): void {
    window.clearInterval(this.timer);
  }

  hideError(): void {
    this.error = '';
  }

  showSignupSuccess(data): void {
    this.success = data.msg;
    this.successType = data.type;
    this.showSupport = false;
    this.showSignup = false;
  }

}
