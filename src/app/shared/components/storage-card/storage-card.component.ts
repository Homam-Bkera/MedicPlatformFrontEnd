import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-storage-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './storage-card.component.html',
  styleUrl: './storage-card.component.scss'
})
export class StorageCardComponent {

  @Input() data!: any;

  constructor(private StorageService: StorageService) {
  }



  setCurrentStorage(id: number) {
    this.StorageService.setCurrentStorage(id.toString());
  }
}
