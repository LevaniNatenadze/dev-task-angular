import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
  constructor() {
    this.localStorage = localStorage;
  }

  setToken(token: string, value: any) {
    let setToken;
    try {
      setToken = JSON.stringify(value);
    } catch (e) {
      setToken = value;
    }

    this.localStorage.setItem(token, setToken);
  }

  getToken(token: string) {
    const getItem = this.localStorage.getItem(token);

    if (getItem) {
      try {
        return JSON.parse(getItem);
      } catch (e) {
        return getItem;
      }
    }
  }

  clearToken() {
    this.localStorage.clear();
  }

}
