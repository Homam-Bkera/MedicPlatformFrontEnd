import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModule } from '../../users.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [UsersModule, FormsModule],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent {
  id: any;
  amount: number = 0;
  addButton: boolean = true;
  doneAdd: boolean = false;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  add() {
    this.doneAdd = true;
  }
}
