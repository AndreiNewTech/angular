import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss'],
})
export class UserProductsComponent {
  displayedColumns: string[] = ['id', 'title', 'category', 'price'];
  products = [];
  subscription: Subscription | null = null;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = parseFloat(this.router.url.split('/')[2]);
    this.productsService.getProductUsers(10, (userId - 1) * 10);

    this.subscription = this.productsService.products.subscribe((val: any) => {
      this.products = val.map((prod: any) => ({
        id: prod.id,
        title: prod.title,
        category: prod.category,
        price: prod.price,
      }));
    });
  }
}
