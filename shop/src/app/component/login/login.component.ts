import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { TokenPayload } from 'src/app/models/tokenpayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:TokenPayload;
  constructor(private fb:FormBuilder,
              private authService:AuthService
    ) { }
  loginForm = this.fb.group({
    email:['test@gmail.com'],
    password:['Password10']
  })
  ngOnInit() {
  }

  login(){
    this.user =  this.loginForm.value;
    this.authService.login(this.user)
    .subscribe(
      data => {console.log("data" , data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
