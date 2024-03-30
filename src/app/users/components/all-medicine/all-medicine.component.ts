import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UsersModule } from '../../users.module';

@Component({
  selector: 'app-all-medicine',
  standalone: true,
  imports: [CardComponent, UsersModule],
  templateUrl: './all-medicine.component.html',
  styleUrl: './all-medicine.component.scss'
})
export class AllMedicineComponent {

  medicines: any = [
    {
      id: 1,
      srcImage: "../../../../assets/medic.jpg",
      title: "title title title title titletitletitletitle",
      price: 45,
      store: "store 1",
      details: "details paragraph details paragraphdetails paragraphdetails paragraphdetails paragraphdetails paragraphdetails paragraphdetails paragraphdetails paragraphdetails paragraphdetaisparagraphdetailsparagraphdetailsparagraphdetailsparagraphdetailsparagraphdetailsparagraphdetailsparagraphdetails paragraph",
    },
    {
      id: 2,
      srcImage: "../../../../assets/medic.jpg",
      title: "anything",
      price: 4,
      store: "store 1",
      details: "details paragraph",
    },
    {
      id: 3,
      srcImage: "../../../../assets/medic.jpg",
      title: "anything",
      price: 12,
      store: "store 1",
      details: "details paragraph",
    },
    {
      id: 3,
      srcImage: "../../../../assets/medic.jpg",
      title: "anything",
      price: 12,
      store: "store 1",
      details: "details paragraph",
    },
    {
      id: 3,
      srcImage: "../../../../assets/medic.jpg",
      title: "anything",
      price: 12,
      store: "store 1",
      details: "details paragraph",
    },
  ];

  addToCart(event: any) {
    console.log(event);
  }

}
