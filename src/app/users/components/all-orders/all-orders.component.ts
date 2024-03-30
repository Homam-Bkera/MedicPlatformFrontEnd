import { Component } from '@angular/core';
import { Orders } from '../../interfaces/orders.interface';
import { UsersModule } from '../../users.module';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [UsersModule],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  order = 5;
  AllOrders: Orders[] = [
    { numberOrder: 1, Quantity: 5, priceTotal: 465, date: '2024' },
    { numberOrder: 2, Quantity: 5, priceTotal: 465, date: '2024' },
  ]


}
