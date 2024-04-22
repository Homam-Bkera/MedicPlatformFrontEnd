import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [DatePipe, FormsModule, SpinnerComponent, CommonModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss'
})
export class UpdateCategoryComponent implements OnInit {

  categoryID: any = 0;
  data: any;
  newName: string = '';
  visibleSpinner: boolean = false;


  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryID = this.CategoryService.getCategoryID();
    this.getDataCategory();
  }

  getDataCategory() {
    this.visibleSpinner = true;
    this.CategoryService.getOneCategory(this.categoryID).subscribe((res: any) => {
      this.data = res.data;
      this.visibleSpinner = false;
    });
  }

  changeName() {
    this.visibleSpinner = true;
    let nameOBJ = {
      name: this.newName,
    }
    this.CategoryService.updateCategory(nameOBJ, this.data.id).subscribe(res => {
      this.newName = ''
      this.visibleSpinner = false;
      this.getDataCategory();
    })
  }
}
