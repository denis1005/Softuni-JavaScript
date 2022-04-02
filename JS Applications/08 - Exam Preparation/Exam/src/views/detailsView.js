import *as petServices from '../services/petServices.js'
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"


const detailsTemplate=(pet,user=false,donations=0)=>html` <!--Details Page-->
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donations}</h4>
                  <!-- if there is no registered user, do not display div-->
            </div>
             ${user
               
               ? html `
                    <!-- if there is no registered user, do not display div-->
                    <div class="actionBtn">
                        ${user._id==pet._ownerId
                           ? html` <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a href="/delete/${pet._id}" class="remove">Delete</a>`
                         : html `<!--(Bonus Part) Only for no creator and user-->
                                <a   href="/donate/${pet._id}" class="donate">Donate</a>`
                         }
                      
                 </div>
                
               ` :nothing
              }
             
           
             
            
        </div>
    </div>
</section>
`

export const detailsView=(ctx)=>{
    let donateElement=document.querySelector('.donate')
    let donations=0;
    petServices.allDonations(ctx.params.id)
    .then(res=>{
        if(res>0){
            donateElement.style.display='none'
            donations=donations+(res*100)
        }
        
    })
   
   
    
    

    petServices.checkNumberDonations(ctx.params.id,ctx.user._id)
    .then(res=>{
        
        
        if(res>0){
            donateElement.disabled=true
            
        }
    })

    
    petServices.getOne(ctx.params.id)
    .then(pet=>{
        ctx.render(detailsTemplate(pet,ctx.user,donations))
    })
    .catch(err=>{
        alert(err)
    })
}