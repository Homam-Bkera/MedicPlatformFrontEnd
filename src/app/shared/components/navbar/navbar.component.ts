import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isHide = true;

  constructor(public AuthService: AuthService) {
  }

  togleNavicationSlide() {
    return this.isHide ? 'disappeared-slide-navication' : 'appearance-slide-navication';
  }


}
