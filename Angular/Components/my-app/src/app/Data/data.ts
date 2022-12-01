import {data} from './seed'
import {Article} from '../models/article.model'

export class ArticleData{
    getData(): Article []{
        let articles: Article[]=[];

        for (let index = 0; index < data.length; index++) {
            articles[index]= new Article (
                data[index].title,
                data[index].author,
                data[index].description,
                data[index].imageUrl
            )
        }
        return articles
    }
}