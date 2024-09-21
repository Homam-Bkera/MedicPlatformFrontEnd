import { Component, Input, OnInit, input } from '@angular/core';
import { Medicine } from '../../interfaces/medicie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medicie.component.html',
  styleUrl: './medicie.component.scss'
})
export class MedicieComponent implements OnInit {
  @Input() medicine!: Medicine;

  constructor() {
  }

  ngOnInit(): void {
  }

}
