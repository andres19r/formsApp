import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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
    name: ['RTX 4080ti'],
    price: [0],
    stock: [0]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
