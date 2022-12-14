import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productCreate: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
    this.productCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  createProduct() {
    this.productService.create(this.productCreate.value).subscribe(next => {
      this.router.navigateByUrl("");
    })

  }
}
