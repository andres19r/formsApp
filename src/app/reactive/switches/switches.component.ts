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
    this.myForm.reset(this.person)
  }

}
