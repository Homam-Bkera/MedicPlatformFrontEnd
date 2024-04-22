import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../../auth/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerComponent, RouterModule],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent implements OnInit {

  visibleSpinner: boolean = false;
  categories: any = []

  constructor(private categoryService: CategoryService, private auth: AuthService) {

  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  OnSubmitForm(form: any) {
    this.visibleSpinner = true;
    this.categoryService.addCategory(form.value).subscribe(res => {
      this.getAllCategory();
      this.visibleSpinner = false;
    })
  }



  getAllCategory() {
    let StorageId = Number(this.auth.getStorageId());
    this.categoryService.getAllCategory(StorageId).subscribe((res: any) => {
      this.categories = res.data
    })
  }

  deletCategory(id: any) {
    this.visibleSpinner = true;
    this.categoryService.deleteCategory(id).subscribe(res => {
      this.getAllCategory();
      this.visibleSpinner = false;
    })
  }

  setCategoryId(id: number) {
    this.categoryService.setCategoryID(id);
  }

}
