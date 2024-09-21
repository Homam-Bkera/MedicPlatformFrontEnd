import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../auth/services/profile.service';
import { TokenStorageService } from '../../../auth/services/token-storage.service';
import { Profile } from '../../interfaces/profile.interface';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WalletService } from '../../../auth/services/wallet.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  profile?: Profile;
  role: string | null = '';
  charge: number = 0;

  constructor(
    private ProfileService: ProfileService,
    private TokenStorage: TokenStorageService,
    private authService: AuthService,
    private wallet: WalletService,
  ) {
  }

  ngOnInit(): void {
    this.getProfile();
    this.getRole();
  }

  getProfile() {
    this.ProfileService.getProfile(this.TokenStorage.getToken()).subscribe((res: any) => {
      this.profile = res;
    })
  }

  getRole() {
    this.role = this.authService.getRole();
  }

  chargerWallet() {
    let data = { cash: this.charge }
    this.wallet.setWallet(data).subscribe(res => {
      console.log(res);
    })
  }

}
