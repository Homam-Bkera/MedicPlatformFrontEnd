import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';
import { RouterModule } from '@angular/router';
import { TokenStorageService } from '../../../auth/services/token-storage.service';
import { WalletService } from '../../../auth/services/wallet.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isHide = true;
  userWallet: string = '';
  role: any;

  constructor(
    public AuthService: AuthService,
    public tokenStorage: TokenStorageService,
    private wallet: WalletService,
  ) {
    this.AuthService.isLogged();
    this.getWallet();
    if (this.AuthService.getRole()) {
      this.role = this.AuthService.getRole();
    }
  }

  togleNavicationSlide() {
    return this.isHide ? 'disappeared-slide-navication' : 'appearance-slide-navication';
  }

  getWallet() {
    //   if (this.tokenStorage.getToken()) {
    //     this.wallet.getWallet(this.tokenStorage.getToken()).subscribe((res: any) => {
    //       if (res.data != null) {
    //         this.userWallet = res.data.cash;
    //       } else {
    //         this.userWallet = "0";
    //       }
    //     })
    //   }
  }
}
