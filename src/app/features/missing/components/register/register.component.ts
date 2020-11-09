import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = this.buildForm();

  constructor(private fb: FormBuilder, private location: Location) {}

  ngOnInit(): void {}

  buildForm(): FormGroup {
    const f = this.fb.group({
      name: [null, Validators.required],
      picture: null,
      identity: null,
      phoneNumber: null,
      gender: [null, Validators.required],
      age: [null, Validators.required],
      description: [null, Validators.required],
      department: [null, Validators.required],
      lastPlaceWasSeen: [null, Validators.required],
      lastContactDate: null,
      status: null,
      summary: null
    });

    return f;
  }

  register() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    // TODO: send data to server
  }

  cancel(): void {
    this.location.back();
  }
}
