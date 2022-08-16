import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { cantBeStrider, emailPattern, firstLastNamesPattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // TODO: move this method

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstLastNamesPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
  })

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Andres Rivero',
      email: 'test1@email.com',
      username: 'andres_rivero19'
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
