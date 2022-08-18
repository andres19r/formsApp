import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { cantBeStrider, emailPattern, firstLastNamesPattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstLastNamesPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.sameFields('password', 'password2')]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Andres Rivero',
      email: 'test1@test.com',
      username: 'andres_rivero19',
      password: '123456',
      password2: '123456',
    })
  }

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

  emailRequired() {
    return this.myForm.get('email')?.errors?.['required'] && this.myForm.get('email')?.touched
  }

  emailFormat() {
    return this.myForm.get('email')?.errors?.['pattern'] && this.myForm.get('email')?.touched
  }

  emailTaken() {
    return this.myForm.get('email')?.errors?.['emailTaken'] && this.myForm.get('email')?.touched
  }

  submitForm() {
    console.log(this.myForm.value)
    this.myForm.markAllAsTouched()
  }
}
