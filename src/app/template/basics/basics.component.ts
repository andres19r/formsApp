import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  initForm = {
    product: 'RTX 4080 ti',
    price: 1500,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls['product']?.invalid 
      && this.myForm?.controls['product']?.touched
  }

  validPrice(): boolean {
    return this.myForm?.controls['price']?.touched 
      && this.myForm?.controls['price']?.value < 0
  }

  // save(myForm: NgForm): void {
  save(): void {
    console.log('Correct posted');
    this.myForm.resetForm({
      product: 'something',
      price: 0,
      stock: 0
    });
  }
}
