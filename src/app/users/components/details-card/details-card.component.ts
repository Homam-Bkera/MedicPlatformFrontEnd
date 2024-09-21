import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModule } from '../../users.module';
import { FormsModule } from '@angular/forms';
import { MedicneService } from '../../../shared/services/medicne.service';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [UsersModule, FormsModule],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent implements OnInit {
  id: any;
  amount: number = 0;
  addButton: boolean = true;
  doneAdd: boolean = false;
  infoMed: any;

  constructor(
    private route: ActivatedRoute,
    private MedicneService: MedicneService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'].slice(1, 10000);
    })

    this.MedicneService.getOne(this.id).subscribe((res: any) => {
      this.infoMed = res.data;

    })
  }

  add() {
    this.doneAdd = true;
  }
}
