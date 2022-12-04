import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   posts:IPost[] | null=null;
   constructor(private dataService:DataService){

   }
  ngOnInit(): void {
    this.dataService
    .getAllPosts()
    .subscribe((res)=>{
       this.posts=res;
       console.log(this.posts)
    });
  }
  

}
