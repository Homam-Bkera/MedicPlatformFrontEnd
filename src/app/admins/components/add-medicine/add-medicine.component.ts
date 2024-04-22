import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';
import { AuthService } from '../../../auth/services/auth.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { MedicneService } from '../../../shared/services/medicne.service';


@Component({
  selector: 'app-add-medicine',
  standalone: true,
  imports: [SpinnerComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.scss'
})
export class AddMedicineComponent implements OnInit {

  AddMedicneForm!: FormGroup;
  allCategories: any;

  Medice: any = {
    name: '',
    price: 0,
    qty: 0,
    categoryId: 0,
    image: '',
  }

  constructor(private categoryService: CategoryService, private authService: AuthService, private mediceService: MedicneService) { }

  ngOnInit(): void {
    this.initAddForm();
    this.getCategories();
  }

  initAddForm() {
    this.AddMedicneForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      quantity: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      selectCategory: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required, this.FileValidator]),
    })
  }

  getCategories() {
    this.categoryService.getAllCategory(Number(this.authService.getStorageId())).subscribe((res: any) => {
      this.allCategories = res.data;
      // console.log(res.data);
    }, err => {
      console.log(err);

    })
  }

  onSubmitForm() {
    this.bidingDataForm();
    this.mediceService.addMedice(this.Medice).subscribe(res => {
      console.log(res);

    })
  }

  onFileCChange($event: any) {
    this.AddMedicneForm.controls['image'].setValue($event.target.files[0])
  }

  bidingDataForm() {
    this.Medice.name = this.AddMedicneForm.get('name')?.value;
    this.Medice.price = this.AddMedicneForm.get('price')?.value;
    this.Medice.qty = this.AddMedicneForm.get('quantity')?.value;
    this.Medice.categoryId = this.AddMedicneForm.get('selectCategory')?.value;
    this.Medice.image = this.AddMedicneForm.get('image')?.value;
  }


  FileValidator(control: AbstractControl): { [key: string]: any } | null {
    const file = control.value;
    const MAX_SIZE = 200000;
    const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

    if (file) {
      if (file.size > MAX_SIZE) {
        return { overSize: true };
      }

      if (!ALLOWED_TYPES.includes(file.type)) {
        return { typeInvalid: true };
      }
    }

    return null;
  }

}
