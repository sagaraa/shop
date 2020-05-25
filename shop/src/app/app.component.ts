import { Component, OnInit } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery.js';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';
import { b } from '@angular/core/src/render3';
function log(target, name, descriptor){
  console.log(target, name , descriptor);

  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log("Arguments " + args + " were passed in this function");
    const result = original.apply(this,args);
    console.log("the result of function is "+ result);
    return result;
  }
  // original();
  return descriptor;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // user$ : Observable<User>;
  isLoggedIn$ : Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    // this.isLoggedIn$ = this.authService.isLoggedIn$;
    // this.isLoggedOut$ = this.authService.isLoggedOut$;
    // this.user$ = this.authService.user$;
    console.log("from constructor " + this.aSimpleMethod(5,2));
    
  }
  title = 'shop';

 @log
 aSimpleMethod(a,b){
   return a*b;
 }
}
