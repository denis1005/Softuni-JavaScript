import *as petServices from '../services/petServices.js'
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

export const deleteView=(ctx)=>{
    let result=confirm('Do you want to delete this pet')
    if(result){
        petServices.deletePet(ctx.params.id)
        .then(res=>{
         ctx.page.redirect('/')
        })       
    }
   
    
 }