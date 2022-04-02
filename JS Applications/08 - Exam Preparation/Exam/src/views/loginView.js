import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as authServices from '../services/authServices.js'

const loginTemplate=(submitHandler)=>html`
<!--Login Page-->
<section id="loginPage">
    <form @submit=${submitHandler} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`

export const loginView=(ctx)=>{

    const submitHandler=(e)=>{
        e.preventDefault()
        let formData= new FormData(e.currentTarget)
        let email= formData.get('email');
        let password= formData.get('password');

        if(email=='' || password==''){
            alert('Unvalued input')
            return;
        }
        authServices.login(email,password) 
        .then(user=>{
            ctx.page.redirect('/');
        })
        
        
        
    }
    ctx.render(loginTemplate(submitHandler));
}