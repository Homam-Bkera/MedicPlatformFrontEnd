import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { AuthService } from '../../../auth/services/auth.service';
import { ProfileService } from '../../../auth/services/profile.service';
import { TokenStorageService } from '../../../auth/services/token-storage.service';
import { error, log } from 'console';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SpinnerComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit {

  visibleSpinner: boolean = false;
  failedUpdate: boolean = false
  FormUpdate!: FormGroup;
  UpdateInfo: any = {};



  constructor(private profile: ProfileService, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.FormUpdate = new FormGroup({
      newUserName: new FormControl('', []),
      confrimUserName: new FormControl('', []),
      newPhone: new FormControl('', [Validators.pattern("^[0-9]{10}$")]),
      confrimPhone: new FormControl('', []),
      newPassword: new FormControl('', [Validators.minLength(5)]),
      confrimPassword: new FormControl('', []),
    })
  }

  onSubmitForm() {
    this.bindingValueForm();
    this.visibleSpinner = true;
    if (this.UpdateInfo.name != null || this.UpdateInfo.phone != null || this.UpdateInfo.password != null) {
      this.profile.updateProfile(this.UpdateInfo, this.token.getToken()).subscribe(res => {
        this.visibleSpinner = false;
        this.resetFormValue();
      }, err => {
        this.visibleSpinner = false;
        this.failedUpdate = true;
      })
    }
  }

  bindingValueForm() {
    this.UpdateInfo = {};
    if (this.userNameMatchValidator()) {
      this.UpdateInfo.name = this.FormUpdate.get('newUserName')?.value;
    }
    if (this.phoneMatchValidator()) {
      this.UpdateInfo.phone = this.FormUpdate.get('newPhone')?.value;
    }
    if (this.passwordfMatchValidator()) {
      this.UpdateInfo.password = this.FormUpdate.get('newPassword')?.value;
    }
  }

  userNameMatchValidator() {
    if (this.FormUpdate.get('newUserName')?.value == this.FormUpdate.get('confrimUserName')?.value && this.FormUpdate.get('newUserName')?.value != '') {
      return true
    } else {
      return false
    }
  }
  phoneMatchValidator() {
    if (this.FormUpdate.get('newPhone')?.value == this.FormUpdate.get('confrimPhone')?.value && this.FormUpdate.get('newPhone')?.value != '') {
      return true
    } else {
      return false
    }
  }
  passwordfMatchValidator() {
    if (this.FormUpdate.get('newPassword')?.value == this.FormUpdate.get('confrimPassword')?.value && this.FormUpdate.get('newPassword')?.value != '') {
      return true
    } else {
      return false
    }
  }

  resetFormValue() {
    this.FormUpdate.reset()
  }

}
