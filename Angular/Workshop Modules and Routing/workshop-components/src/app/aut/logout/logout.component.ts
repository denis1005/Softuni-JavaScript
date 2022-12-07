import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from '../aut.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(
    private router:Router, 
    private authService:AutService ){
     this.authService.user=null
     this.router.navigate(['/']);
   }


}
