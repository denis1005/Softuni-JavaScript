class ArtGallery {
  constructor(creator){
   this.creator=creator; 
  }
  possibleArticles= { "picture":200,"photo":50,"item":250 }
  listOfArticles=[];
  guests=[]

  addArticle( articleModel, articleName, quantity ){
    let isContained=false
    articleModel=articleModel.toLowerCase();

    if (this.possibleArticles[articleModel.toLowerCase()]==undefined) {
      throw new Error ("This article model is not included in this gallery!");
    }
    if(!isContained){
      for (const articles of this.listOfArticles) {
        if(articles.articleModel==articleModel && articles.articleName==articleName){
          articles[quantity]+=Number(quantity);
          isContained=true;
          return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
      }
    }
    this.listOfArticles.push({articleModel,articleName,quantity});
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    

   
  }
  
  inviteGuest ( guestName, personality){
    let isThere=false;
    for (const guest of this.guests) {
      if(guest.guestName==this.guestName){
        isThere=true;
        throw new Error`${guestName} has already been invited.`;
      }
    }
    if (personality=="Vip") {
      this.guests.push({guestName, points:500, purchaseArticle:0});
      return `You have successfully invited ${guestName}!`;
    }
    else if(personality=="Middle"){
      this.guests.push({guestName, points:250, purchaseArticle:0});
      return `You have successfully invited ${guestName}!`;
    }

  }
  buyArticle ( articleModel, articleName, guestName){
    let notfound=true;
  
    let indexOfarticle=0;
    let indexOgues=0;
    
    for (const article of this.listOfArticles) {

      if(article.articleModel==articleModel){
        if(article.articleName==articleName){
         
          notfound=false;
          break;
        }
      }
      indexOfarticle++;
     
    }
    let articleObj=this.listOfArticles[indexOfarticle];

    for (const guest of this.guests) {
      if(guest.guestName==guestName){
       
        break;
      }
      indexOgues++;
    }

    let guestObj=this.guests[indexOgues];
    if(notfound){
     return "This article is not found."
    }
    if(articleObj.quantity==0){
     return `The ${articleName} is not available.`
    }
    if(!this.guests.find(x=>x.guestName==guestName)){
      return "This guest is not invited."
    }
     
    

    if(guestObj.points>=this.possibleArticles[articleModel]){
      guestObj.points-=guestObj;
      articleObj.quantity-=1;
      guestObj.purchaseArticle=+1;
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

    }else{
      return `You need to more points to purchase the article.`
    }

  }
  showGalleryInfo (criteria){
    if(criteria=="article"){
      let result="Articles information:"+ '\n';
      for (const articles of this.listOfArticles) {
       result= result+`${articles.articleModel} - ${articles.articleName} - ${articles.quantity}`+ '\n';
      }
      return result;
    }else if(criteria=="guest"){
      let result="Guests information:"+ '\n';
      for (const guest of this.guests) {
       result= result+`${guest.guestName} - ${guest.purchaseArticle}`+'\n';
      }
      return result.trim();
    }
  }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


