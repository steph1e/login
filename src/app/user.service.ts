import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

 private isUserLoggedn;
 private username;

  constructor() { 
    this.isUserLoggedn = false;
  }
  setUserLoggedIn(){
    this.isUserLoggedn = true;
  }
  getUserLoggedin(){
    return this.isUserLoggedn;
  }

}
