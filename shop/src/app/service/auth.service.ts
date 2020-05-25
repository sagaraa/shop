import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { UserDetails } from '../models/user';
import { Router } from '@angular/router';
import { TokenPayload } from '../models/tokenpayload';

// export const ANONYMUS_USER:UserDetails = {
//   id:undefined,
//   email:'',
//   password:''
// }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // private subject = new BehaviorSubject<User>(ANONYMUS_USER);
  // user$: Observable<User> = this.subject.asObservable();
  // isLoggedIn$: Observable<boolean> = this.user$.pipe(
    // map(user => !!user.id)   
  // );

  // isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(
  //   map(isLoggedIn => !isLoggedIn)
  // )
  private token:string;
  constructor(private http:HttpClient,
              private router:Router  
    ) { }


  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }


  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;
  
    if (method === 'post') {
      base = this.http.post(`http://localhost:4000/${type}`, user);
    } else {
      base = this.http.get(`http://localhost:4000/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }


  public signUp(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }
  
  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }
  
  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }


  // signUp(email:string, password:string){
  //   console.log("creating user")
  //   return this.httpClient.post<any>(environment.baseUrl +'signup', {email,password})
  //               .pipe(
  //                 shareReplay(),
  //                 tap(user => this.subject.next(user))
  //               );
  // }

  // login(email: string, password:string) {
  //   console.log("logging in ")
  //   return this.httpClient.post<any>('http://localhost:4000/'+'login', {email,password});
  // }
}
