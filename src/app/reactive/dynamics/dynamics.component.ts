import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required)
  })

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  save(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value)
    this.myForm.reset()
  }
}
