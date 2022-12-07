import { Injectable } from '@angular/core';
import { IUSer } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor() { }
  
  user:IUSer | null=null;

  public get IsLoggedIn(){
    return this.user;
  }

}
