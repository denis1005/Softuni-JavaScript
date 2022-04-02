import { html ,nothing } from "../../node_modules/lit-html/lit-html.js"
import * as authServices from '../services/authServices.js'

export const logoutView = (ctx)=>{
    authServices.logout()
    .then(res=>{
        ctx.page.redirect('/')
    })
    .catch(err=>{
        alert(err)
    })
}