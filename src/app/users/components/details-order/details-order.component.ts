import { Component } from '@angular/core';
import { UsersModule } from '../../users.module';

@Component({
  selector: 'app-details-order',
  standalone: true,
  imports: [UsersModule],
  templateUrl: './details-order.component.html',
  styleUrl: './details-order.component.scss'
})
export class DetailsOrderComponent {
  orders: any = [
    {
      image: '../../../../assets/medic.jpg',
      name: 'product name',
      price: 45,
      quantity: 4,
      totalPrice: 180,
    },
    {
      image: '../../../../assets/medic.jpg',
      name: 'name',
      price: 45,
      quantity: 4,
      totalPrice: 180,
    },
    {
      image: '../../../../assets/medic.jpg',
      name: 'product',
      price: 45,
      quantity: 4,
      totalPrice: 180,
    },
  ]

}
