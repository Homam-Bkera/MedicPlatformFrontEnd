import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {

  currentIdStorage: any = 0;
  visibleSpinner: boolean = false;
  storeInfo: any;

  constructor(private storage: StorageService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.visibleSpinner = true;
    this.route.params.subscribe(params => {
      this.currentIdStorage = params['id'].slice(1, 100);
    })
    this.storage.getStorage(this.currentIdStorage).subscribe((res: any) => {
      this.visibleSpinner = false;
      this.storeInfo = res.data;
    })
  }

}
