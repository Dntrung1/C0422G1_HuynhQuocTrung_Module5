import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  productUpdate: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get("id");
      this.productService.findById(parseInt(id)).subscribe(next => {
        this.product = next;
        this.productUpdate = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
        })
      });
    })
  }

  updateProduct() {
    this.productService.update(this.productUpdate.value).subscribe(next => {
      this.router.navigateByUrl("");
      console.log()
    })
  }
}
