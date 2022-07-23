import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(userData: { firstName?: string; lastName?: string; dateofbirth?: string; password?: string; username?: string; phoneNumber?: string; }, type:string) {
    const url = type === 'Customer' ? `${api_url}/customers` : `${api_url}/employee`;
    return this.http.post(url, userData );
  }
  login(loginData: { type: any; username?: string; password?: string;}){
    const link = `${api_url}/login`;
    return this.http.post(link, loginData);
  }
  }

  