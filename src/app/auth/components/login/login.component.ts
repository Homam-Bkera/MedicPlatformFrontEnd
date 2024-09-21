import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { UserLogin } from '../../interfaces/user-login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  showPassword: boolean = false;
  invalidLogin: boolean = false;
  visibleSpinner: boolean = false;
  error: string = 'Try again';

  user: UserLogin = {
    phone: '',
    password: '',
  };

  constructor(
    public AuthService: AuthService,
    public tokenStorage: TokenStorageService,
    public router: Router
  ) {
  }


  OnSubmitForm(form: any) {
    this.visibleSpinner = true;
    this.bindingData(form);
    this.AuthService.login(this.user).subscribe(res => {
      this.tokenStorage.setToken(res.token);
      this.AuthService.setRole(res.data.role);
      if (res.data.role == 'admin') {
        this.AuthService.setStorageId(res.data.StorageAdmins[0].storageId)
      }
      this.AuthService.isLogged();
      this.navigate(res.data.role);
    }, err => {
      this.error = err.error.message;
      this.visibleSpinner = false;
      this.invalidLogin = true;
    })
  }

  navigate(role: string) {
    if (role == 'superAdmin') {
      this.router.navigate(['./superAdmin']);
    } else if (role == 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  }

  bindingData(form: any) {
    this.user.phone = form.value.number;
    this.user.password = form.value.password;
  }
}
