import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from '../../interfaces/register';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AuthModule, SpinnerComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  FormRegister!: FormGroup;
  visibleSpinner: boolean = false;
  error: string = '';


  Register: register = {
    phone: '',
    password: '',
    name: '',
  };


  constructor(
    public AuthService: AuthService,
    public router: Router

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.FormRegister = new FormGroup({
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      // email: new FormControl('', [Validators.required, Validators.email]),
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
    this.AuthService.register(this.Register).subscribe((res: any) => {
      this.router.navigateByUrl('/auth');
      this.visibleSpinner = false;
    }, (err: any) => {
      this.error = err.error.messages.phone;
      this.visibleSpinner = false;
    })

  }

  bindingValueForm() {
    this.Register.phone = this.FormRegister.get('phone')?.value;
    this.Register.name = this.FormRegister.get('username')?.value;
    this.Register.password = this.FormRegister.get('password')?.value;
  }

  // validtor confirm password 
  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value
      ? null
      : { mismatch: true }
  }

}
