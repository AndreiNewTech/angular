import { Component } from '@angular/core';
import type { User } from '../../../services/users/users.service';
import { UsersService } from 'src/app/services/users/users.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {
  user: User | undefined;
  products = [];
  subscription: Subscription | null = null;

  constructor(
    public usersService: UsersService,
    public productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((valRoute) => {
      // this.usersService.users.subscribe((usersList) => {
      //   this.user = usersList.find(
      //     (user) => user.id === parseInt(valRoute['id'])
      //   );
      // });

      this.productsService.getProductUsers(10, (valRoute['id'] - 1) * 10);
      this.subscription = this.productsService.products.subscribe(
        (val: any) => {
          this.products = val;
          console.log(this.products);
        }
      );
    });
  }

  ngOnDestroy() {
    console.log('Destroyed');
    this.subscription?.unsubscribe();
  }
}
