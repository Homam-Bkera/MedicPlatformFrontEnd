import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicneService } from '../../services/medicne.service';
import { DetailsMedicine } from '../../interfaces/details-medicine';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-details-medicine',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './details-medicine.component.html',
  styleUrl: './details-medicine.component.scss'
})
export class DetailsMedicineComponent implements OnInit {

  detailsMedicine!: DetailsMedicine;
  visibleSpinner: boolean = false;
  name: string = '';
  price!: number;
  qty!: number;

  constructor(private route: ActivatedRoute, private MedicneService: MedicneService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.visibleSpinner = true;
    this.route.params.subscribe((params: any) => {
      this.MedicneService.getOne(params.id).subscribe((res: any) => {
        this.detailsMedicine = res.data;
        this.visibleSpinner = false;
      })
    })
  }

  updateName() {
    let data = { name: this.name };
    this.visibleSpinner = true;
    this.MedicneService.updateMedicine(data, this.detailsMedicine.id).subscribe((res: any) => {
      this.visibleSpinner = false;
      this.getData();
      this.name = '';
    })
  }
  updatePrice() {
    let data = { price: this.price };
    this.visibleSpinner = true;
    this.MedicneService.updateMedicine(data, this.detailsMedicine.id).subscribe((res: any) => {
      this.visibleSpinner = false;
      this.getData();
      this.price = 0;
    })
  }
  updateQTY() {
    let data = { qty: this.qty };
    this.visibleSpinner = true;
    this.MedicneService.updateMedicine(data, this.detailsMedicine.id).subscribe((res: any) => {
      this.visibleSpinner = false;
      this.getData();
      this.qty = 0;
    })
  }
}
