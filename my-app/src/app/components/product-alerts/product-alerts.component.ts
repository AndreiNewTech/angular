import { Component, Input } from '@angular/core';
import type { Product } from '../product-list/product-list.component';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
}
