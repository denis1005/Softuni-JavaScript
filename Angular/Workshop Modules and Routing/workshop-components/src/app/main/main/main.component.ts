import { Component } from '@angular/core';
import { AutService } from 'src/app/aut/aut.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
   get isLogged(){
    return this.authService.IsLoggedIn
   };
   constructor(private authService:AutService){

   }
}
