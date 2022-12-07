import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from 'src/app/aut/aut.service';
import { IUSer } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  get isLogged(){
    return this.authUser.IsLoggedIn
  };

   constructor(private authUser:AutService, private router:Router){
     
   }
   
}
