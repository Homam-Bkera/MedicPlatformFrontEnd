import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { UserLogin } from '../../interfaces/user-login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';


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
  error: string = '';

  user: UserLogin = {
    phone: '',
    password: '',
  };

  constructor(
    public AuthService: AuthService,
    public router: Router
  ) {
  }

  OnSubmitForm(form: any) {
    this.visibleSpinner = true;
    this.user.phone = form.value.number;
    this.user.password = form.value.password;
    this.AuthService.login(this.user).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.data.role);
      if (res.data.role == 'superAdmin') {
        this.router.navigateByUrl('/superAdmin');
      } else if (res.data.role == 'admin') {
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/user');
      }
    }, (err: any) => {
      this.error = err.error.message;
      this.visibleSpinner = false;
      this.invalidLogin = true;
    })
  }

}
