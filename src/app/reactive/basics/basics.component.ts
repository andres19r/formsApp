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
    name: ['RTX 4080ti', [Validators.required, Validators.minLength(3)]],
    price: [0, [ Validators.min(0), Validators.required ]],
    stock: [0, [ Validators.min(0), Validators.required ]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
