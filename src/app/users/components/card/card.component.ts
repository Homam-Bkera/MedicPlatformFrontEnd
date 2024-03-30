import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersModule } from '../../users.module';
import { Medicine } from '../../interfaces/medicine.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UsersModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() medicine!: Medicine;
  @Output() item = new EventEmitter();
  amount: number = 0;
  addButton: boolean = true;
  doneAdd: boolean = false;

  constructor() {
  }


  // Add() {
  //   this.item.emit({ item: this.medicine, quantity: this.amount })
  // }
  add() {
    this.doneAdd = true;
    this.item.emit({ item: this.medicine, quantity: this.amount });
  }

}
