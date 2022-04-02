import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as authServices from '../services/authServices.js'

const registerTemplate = (submitHandler) => html`<!--Register Page-->
<section id="registerPage">
    <form @submit=${submitHandler} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`

export const registerView=(ctx)=>{
    const submitHandler=(e)=>{
        e.preventDefault()
        let formData= new FormData(e.currentTarget)
        let email= formData.get('email');
        let password= formData.get('password');
        let repeatPass=formData.get('repeatPassword');
        console.log(email,password,repeatPass)
        if(email=='' || password=='' || repeatPass==''){
            alert('Unvalued input')
            return;
        }
        if(password!=repeatPass){
            alert('Unvalued input')
            return;
        }

        authServices.register(email,password) 
        .then(user=>{
            ctx.page.redirect('/');
        })
       
        
    }
    ctx.render(registerTemplate(submitHandler))
}