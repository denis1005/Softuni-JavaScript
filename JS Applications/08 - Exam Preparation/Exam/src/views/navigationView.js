import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

const guestTemplate = () => html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>
`

const userTemplate = () => html`
<li><a href="/creat">Create Postcard</a></li>
<li><a href="/logout">Logout</a></li>>
`

const navigationTemplate = (user) => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <!--Only Guest-->
         ${user
          ?userTemplate()
          :guestTemplate()
         }
        <!--Only Users-->
        
    </ul>
</nav>
`
export const navigationView=(ctx)=>{
    return navigationTemplate(ctx.user)
}