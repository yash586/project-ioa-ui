import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(userData: { firstName?: string; lastName?: string; dateofbirth?: string; password?: string; username?: string; phoneNumber?: string; }, type:string) {
    const url = type === 'Customer' ? 'http://localhost:3000/customers' : 'http://localhost:3000/employee';
    return this.http.post(url, userData );
  }
  login(loginData: { type: any; username?: string; password?: string;}){
    const link = 'http://localhost:3000/login';
    return this.http.post(link, loginData);
  }
  }

  