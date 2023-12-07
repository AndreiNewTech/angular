import { Component } from '@angular/core';
import type { User } from '../../../services/users/users.service';
import { UsersService } from 'src/app/services/users/users.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
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
  // sublinks = [
  //   {
  //     label: 'Products',
  //     link: './products',
  //     index: 1,
  //   },
  //   {
  //     label: 'Comments',
  //     link: './comments',
  //     index: 2,
  //   },
  // ];

  constructor(
    public usersService: UsersService,
    public productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.navigate(['products'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.route.params.subscribe((valRoute) => {
      this.usersService.users.subscribe((usersList) => {
        this.user = usersList.find(
          (user) => user.id === parseInt(valRoute['id'])
        );
      });
    });
  }

  handleTabChange(event: any) {
    const routeName =
      event.tab.textLabel === 'Products' ? 'products' : 'comments';
    this.router.navigate([routeName], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
