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
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.firstLastNamesPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Andres Rivero',
      email: 'test1@email.com'
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
