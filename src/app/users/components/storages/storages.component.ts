import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storages',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent implements OnInit {

  AllStorage: any;
  visibleSpinner: boolean = false;


  constructor(private StorageSer: StorageService, private router: Router) {

  }
  ngOnInit(): void {
    this.visibleSpinner = true;
    this.StorageSer.getAllStorage().subscribe((res: any) => {
      this.AllStorage = res.data;
      this.visibleSpinner = false;
    })
  }

  selectStorage(id: any) {
    this.router.navigate(['/user/stor/:' + id])
  }
}
