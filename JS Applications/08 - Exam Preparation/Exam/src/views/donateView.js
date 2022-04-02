import *as petServices from '../services/petServices.js'
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

export const donateView=(ctx)=>{
    petServices.donate(ctx.params.id)
    .then(res=>{
        console.log(res)
        ctx.page.redirect(`/details/${ctx.params.id}`)
    })
        

}