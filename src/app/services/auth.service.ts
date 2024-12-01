import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: String, pword: String) {
    if (uname === 'Siyumi' && pword === 'Siyu2000') {
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
     this.router.navigate(['login']);
  }
}
