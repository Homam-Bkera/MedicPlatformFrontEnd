import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { MedicieComponent } from '../medicie/medicie.component';

@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [CommonModule, MedicieComponent],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss'
})
export class ViewCategoryComponent implements OnInit {

  AllMeds: any;

  constructor(private CategoryService: CategoryService, private AuthService: AuthService) { }

  ngOnInit(): void {
    this.CategoryService.getOneCategory(Number(this.CategoryService.getCategoryID())).subscribe((res: any) => {
      this.AllMeds = res.data.Medicines;
    })
  }
}
