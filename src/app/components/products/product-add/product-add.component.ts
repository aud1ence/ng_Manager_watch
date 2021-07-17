import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  formCreateProduct!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.formCreateProduct = this.fb.group({
      name: ['', [Validators.required]],
      collection: ['',[Validators.required]],
      price: ['',[Validators.required]],
      image: ['',[Validators.required]],
      watch: ['',[Validators.required]],
      dial: ['',[Validators.required]],
      case: ['',[Validators.required]],
      bracelet: ['',[Validators.required]],
    });
  }

  create() {
    console.log(this.formCreateProduct.value)
  }

  getErrorMessage() {
    // @ts-ignore
    return this.name?.hasError('required') ? 'Not a valid name' : '';
  }

  get name(){
    return this.formCreateProduct?.get('name');
  }
}
