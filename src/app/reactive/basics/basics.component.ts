import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(0),
  //   stock: new FormControl(5),
  // })

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [ Validators.min(0), Validators.required ]],
    stock: [, [ Validators.min(0), Validators.required ]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
     && this.myForm.controls[field].touched
  }
}
