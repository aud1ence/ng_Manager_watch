import {Component, OnChanges, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators, NgForm, FormGroupDirective} from '@angular/forms';
import {ErrorStateMatcher} from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    // @ts-ignore
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {
  selectedValue?: string;
  hide = true;
  registerForm!: FormGroup;
  countries = [
    'Rome',
    'Paris',
  ];
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('\\+84\\d{9,10}')]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
    }, {validator: this.checkPasswords})
  }

  ngOnChanges() {

  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true}
  }

  registerUser() {
    console.log(this.registerForm.value);
    console.log(this.confirmPassword?.invalid);
  }

  getErrorMessageEmail() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    return this.registerForm.hasError('notSame') ? '' : 'Password do not match';
  }

  getErrorMessagePhone() {

    return this.phone?.hasError('pattern') ? 'Not a valid phone from VN' : '';
  }

  getErrorMessageAge() {
    return this.age?.hasError('min') ? 'You have to over 18!' : '';
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}
