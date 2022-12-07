import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from './environments/environment'
import { IPost } from './interfaces/post';
import { ITheme } from './interfaces/theme';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(private http:HttpClient){}
  
  getAllPosts(){
     return this.http.get<IPost[]>(`${environment.apiUtr}/posts?limit=5`)
  }

  getAllThemes(){
    return this.http.get<ITheme[]>(`${environment.apiUtr}/themes`)
 }
}
