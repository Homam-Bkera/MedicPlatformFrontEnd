import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UpdateStorage } from '../../interfacce/update-storage';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-storage',
  standalone: true,
  imports: [FormsModule, SpinnerComponent, CommonModule],
  templateUrl: './update-storage.component.html',
  styleUrl: './update-storage.component.scss'
})
export class UpdateStorageComponent {

  visibleSpinner: boolean = false;
  errorCreateStorage: boolean = false;
  successCreateStorage: boolean = false;
  error: string = 'Try again';

  updateStore: any = [];

  constructor(private StorageService: StorageService) {
  }


  applyChange(form: any) {
    this.visibleSpinner = true;
    this.bindingData(form);
    let idCurrentStore = this.StorageService.getCurrentStorage();
    this.StorageService.updateStorage(this.updateStore, +idCurrentStore).subscribe(res => {
      this.visibleSpinner = false;
      this.successCreateStorage = true;

    }, err => {
      this.visibleSpinner = false;
      this.errorCreateStorage = true;

    })

  }

  bindingData(form: any) {
    if (form.value.name && form.value.location) {
      this.updateStore = { name: form.value.name, location: form.value.location };
    } else if (form.value.location) {
      this.updateStore = { location: form.value.location };
    } else if (form.value.name) {
      this.updateStore = { name: form.value.name };
    }
  }
}
