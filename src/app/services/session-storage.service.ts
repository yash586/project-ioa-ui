import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }

  getItem(key: string) {
    const value = window.sessionStorage.getItem(key);
    return value;
  }

  clear() {
    window.sessionStorage.clear();
  }
}
