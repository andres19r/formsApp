import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  })

  person = {
    genre: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    })

    this.myForm.valueChanges.subscribe(({ terms, ...rest }) => {
      // delete form.terms
      this.person = rest;
    })
  }

  save(): void {
    const formValue = {...this.myForm.value}
    delete formValue.terms
    this.person = formValue
  }
}
