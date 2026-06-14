import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noNumberValidator } from '../../common/validators/no-numbers.validator';

@Component({
  selector: 'app-student-register',
  imports: [ReactiveFormsModule],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css',
})
export class StudentRegister {
  studentForm = new FormGroup({
    fullName:new FormControl('',[Validators.required,noNumberValidator]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get email() {
    return this.studentForm.get('email');
  }
  get fullName() {
    return this.studentForm.get('fullName');
  }
  get password() {
    return this.studentForm.get('password');
  }

  register() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    alert('form Submited Successfully!');
    this.studentForm.reset()
  }
  // Form Array
}
