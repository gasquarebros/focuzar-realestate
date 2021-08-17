import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  supportForm: FormGroup;

  get supportQuery(): any { return this.supportForm.get('supportQuery'); }
  get mobile(): any { return this.supportForm.get('mobile'); }

  constructor() { }

  ngOnInit(): void {
    this.supportForm = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9]+$')
      ]),
      supportQuery: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit(): void {

  }

}
