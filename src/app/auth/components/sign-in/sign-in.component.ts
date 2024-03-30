import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  FormRegister!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.FormRegister= new FormGroup({
      username:new FormControl('',[Validators.required]),
      number:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),
    });
  }

  onSubmitForm(){
    console.log(this.FormRegister.value);
  }

}
