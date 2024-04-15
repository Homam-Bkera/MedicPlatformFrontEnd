import { Component } from '@angular/core';
import { CreateStorage } from '../../interfaces/create-storage.interface';
import { FormsModule, NgModel } from '@angular/forms';
import { SuperAdminModule } from '../../super-admin.module';
import { StorageService } from '../../../shared/services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-storage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-storage.component.html',
  styleUrl: './create-storage.component.scss'
})
export class CreateStorageComponent {

  errorCreateStorage: boolean = false;
  successCreateStorage: boolean = false;

  createStorage: CreateStorage = {
    name: '',
    location: ''
  }

  constructor(private StorageService: StorageService) {
  }

  onSumitForm(form: any) {
    this.bindingData(form);
    this.StorageService.createStorage(this.createStorage).subscribe(res => {
      this.successCreateStorage = true;
      this.resetForm(form);
    }, err => {
      this.errorCreateStorage = true;
    })

  }

  bindingData(form: any) {
    this.createStorage.name = form.value.name;
    this.createStorage.location = form.value.location;
  }

  resetForm(form: any) {
    form.resetForm()
  }
}
