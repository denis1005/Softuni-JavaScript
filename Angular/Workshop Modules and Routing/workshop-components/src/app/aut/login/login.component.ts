import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from '../aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(
    private router:Router, 
    private authService:AutService ){
     this.authService.user={
      themes: [],
      posts: [],
      _id: '',
      tel: '',
      email: '',
      username: 'Ivan',
      password: '',
      created_at: '',
      updatedAt: '',
      __v: 0,
     }
     this.router.navigate(['/']);
   }



   
}
