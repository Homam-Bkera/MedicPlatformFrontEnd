import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { CommonModule } from '@angular/common';
import { StorageCardComponent } from '../../../shared/components/storage-card/storage-card.component';

@Component({
  selector: 'app-all-storage',
  standalone: true,
  imports: [CommonModule, StorageCardComponent],
  templateUrl: './all-storage.component.html',
  styleUrl: './all-storage.component.scss'
})
export class AllStorageComponent implements OnInit {
  allStorages: any;

  constructor(private storageService: StorageService) {

  }
  ngOnInit(): void {
    this.storageService.getAllStorage().subscribe((res: any) => {
      this.allStorages = res.data;
    })
  }
}
