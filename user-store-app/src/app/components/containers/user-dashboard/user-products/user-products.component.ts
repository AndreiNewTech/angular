import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  filteredProducts = [];
  subscription: Subscription | null = null;
  pageLength = 5;
  pageSize = 3;
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

      this.filteredProducts = this.products.slice(0, this.pageSize);
      this.pageLength = this.products.length;
    });
  }

  handlePageChange(e: PageEvent) {
    const start = e['pageIndex'] * e['pageSize'];
    const pageSize = e['pageSize'];
    this.filteredProducts = this.products.slice(start, start + pageSize);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
