import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UsersModule } from '../../users.module';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-all-medicine',
  standalone: true,
  imports: [CardComponent, UsersModule, SpinnerComponent],
  templateUrl: './all-medicine.component.html',
  styleUrl: './all-medicine.component.scss'
})
export class AllMedicineComponent implements OnInit {

  medicines: any;
  visibleSpinner: boolean = false;


  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.visibleSpinner = true;
    this.route.params.subscribe(params => {
      this.categoryService.getOneCategory(params['id']).subscribe((res: any) => {
        this.medicines = res.data.Medicines;
        this.visibleSpinner = false;
      })
    })
  }


  addToCart(event: any) {
    console.log(event);
  }

}
