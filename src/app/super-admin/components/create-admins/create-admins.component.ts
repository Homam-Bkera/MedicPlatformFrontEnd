import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateAdminInterface } from '../../interfaces/create-admin.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-create-admins',
  standalone: true,
  imports: [SpinnerComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './create-admins.component.html',
  styleUrl: './create-admins.component.scss'
})
export class CreateAdminsComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  FormRegisterAdmin!: FormGroup;
  visibleSpinner: boolean = false;
  error: boolean = false;
  allStorage: any = [];
  selectedStorageId = 0;


  createAdmin: CreateAdminInterface = {
    name: '',
    password: '',
    phone: 0,
    role: '',
    storageId: 0,
  };


  constructor(
    public AuthService: AuthService,
    public StorageService: StorageService,

  ) { }

  ngOnInit(): void {
    this.visibleSpinner = true;
    this.StorageService.getAllStorage().subscribe((res: any) => {
      this.allStorage = res.data;
      this.visibleSpinner = false;
    })
    this.initForm();
  }

  initForm() {
    this.FormRegisterAdmin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {
      validators: this.passwordMatchValidator,
    }
    )
  }

  onSubmitForm() {
    this.visibleSpinner = true;
    this.bindingValueForm();
    this.AuthService.registerAdmin(this.createAdmin).subscribe((res: any) => {
      this.visibleSpinner = false;
      this.resetFrom();
    }, (err: any) => {
      this.visibleSpinner = false;
      this.error = true;
    })

  }

  bindingValueForm() {
    this.createAdmin.phone = this.FormRegisterAdmin.get('phone')?.value;
    this.createAdmin.name = this.FormRegisterAdmin.get('username')?.value;
    this.createAdmin.password = this.FormRegisterAdmin.get('password')?.value;
    this.createAdmin.role = 'admin';
    this.createAdmin.storageId = this.selectedStorageId;
  }

  resetFrom() {
    this.FormRegisterAdmin.get('username')?.reset();
    this.FormRegisterAdmin.get('phone')?.reset();
    this.FormRegisterAdmin.get('password')?.reset();
    this.FormRegisterAdmin.get('confirmPassword')?.reset();
  }

  // validtor confirm password 
  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value
      ? null
      : { mismatch: true }
  }

}
