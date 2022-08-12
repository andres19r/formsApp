import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // TODO: Temporal
  firstLastNamesPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)"

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.firstLastNamesPattern)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

  submitForm() {
    console.log(this.myForm.value)
    this.myForm.markAllAsTouched()
  }
}
