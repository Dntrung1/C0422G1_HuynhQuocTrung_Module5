import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  idD: number;
  nameD: string;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
    this.deleteFindId();
  }

  deleteFindId() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get("idDelete");
      this.productService.deleteById(parseInt(id)).subscribe(next => {
        this.router.navigateByUrl("");
      });
    })
  }

  findAll() {
    this.productService.findAll().subscribe(next => {
      this.products = next;
    });
  }

  submitFomrDelete(idDelete: number, name: string) {
    console.log(idDelete)
    this.idD = idDelete;
    this.nameD = name;
    console.log(this.idD)
  }
}
