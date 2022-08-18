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

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors
    if(errors?.['required']) {
      return 'The email is required'
    } else if(errors?.['pattern']) {
      return 'The input value is not in email format'
    } else if(errors?.['emailTaken']) {
      return 'The email is already taken'
    }
    return ''
  }

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

  submitForm() {
    console.log(this.myForm.value)
    this.myForm.markAllAsTouched()
  }
}
