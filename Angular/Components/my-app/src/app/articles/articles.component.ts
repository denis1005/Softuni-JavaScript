import { Component } from '@angular/core';
import { ArticleData } from '../Data/data';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
   articles!:Article[]

   ngOnInit(){
    this.articles=new ArticleData().getData()
   }
}
