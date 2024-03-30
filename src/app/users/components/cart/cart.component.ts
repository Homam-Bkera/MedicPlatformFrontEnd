import { Component } from '@angular/core';
import { UsersModule } from '../../users.module';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [UsersModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: any = [
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
