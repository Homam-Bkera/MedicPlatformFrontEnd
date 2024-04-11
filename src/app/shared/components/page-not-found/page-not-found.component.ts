import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private auth: AuthService, private router: Router) {
    this.auth.islogged = false;
  }

  navigate() {
    let role = this.auth.getRole();
    if (role == 'superAdmin') {
      this.router.navigate(['./superAdmin']);
      this.auth.islogged = true;
    } else if (role == 'admin') {
      this.router.navigate(['/admin']);
      this.auth.islogged = true;
    } else if (role == 'user') {
      this.router.navigate(['/user']);
      this.auth.islogged = true;
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
