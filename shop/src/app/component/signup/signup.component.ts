import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { TokenPayload } from 'src/app/models/tokenpayload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  payload:TokenPayload;
  constructor(private fb:FormBuilder,
              private authService:AuthService
    ) { }
  signUpForm = this.fb.group({
    name: [],
    email: [],
    password:[],
    confirmPassword:[]
  })
  ngOnInit() {
  }

  signUp(){
    this.payload = this.signUpForm.value;
    if(this.payload.email && this.payload.password && this.payload.password === this.signUpForm.value.confirmPassword){      
    this.authService.signUp(this.payload)
        .subscribe(
          data => { console.log(data) },
          error => { console.log(error, "User couldn't be created")}
        )
    }
    else{
      console.log("Enter correct value")
    }
  }
}
