import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  public error = '';
  public isProcessing = false;

  get name(): any { return this.signupForm.get('name'); }
  get mobileCode(): any { return this.signupForm.get('mobileCode'); }
  get mobile(): any { return this.signupForm.get('mobile'); }
  get email(): any { return this.signupForm.get('email'); }
  get terms(): any { return this.signupForm.get('terms'); }

  @Output() signupOutput = new EventEmitter();


  constructor(private apiService: AppService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      mobileCode: new FormControl('', []),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9]+$')
      ]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      terms: new FormControl('', [Validators.requiredTrue])
    });
  }

  onSignup(): void {
    this.error = '';
    if (this.signupForm.valid) {
      this.isProcessing = true;
      const URL = 'api/adduser';
      const postData = new FormData();
      postData.append('name', this.signupForm.get('name').value);
      postData.append('country', this.signupForm.get('mobileCode').value);
      postData.append('phone', this.signupForm.get('mobile').value);
      postData.append('email', this.signupForm.get('email').value);
      const postObj  = {
        name: this.signupForm.get('name').value,
        country: this.signupForm.get('mobileCode').value,
        phone: this.signupForm.get('mobile').value,
        email: this.signupForm.get('email').value
      };
      this.apiService.doPost(URL, postObj).subscribe((data) => {
        this.signupOutput.emit({
          msg: 'Please Sign in with the OTP received from your Mobile or E-mail to complete the registration process.',
         type: 'signup'
        });
      },
      err => {
        console.log(err);
       // check error status code is 500, if so, do some action
        this.error = 'You are not registered user, Kindly sign up to view Immersive Zone';
        this.isProcessing = false;
      });
    }
  }

}
