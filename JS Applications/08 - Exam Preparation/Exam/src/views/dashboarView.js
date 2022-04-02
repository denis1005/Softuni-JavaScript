import *as petServices from '../services/petServices.js'
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

const petTemplate = (pet) => html`

    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src=${pet.image}>
        </article>
        <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${pet._id}">Details</a>
        </div>
    </div>
`

const dashboardTemplate = (pets) => html`
<!--Dashboard-->
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${pets.map(x => petTemplate(x))}
        <div>
        ${pets.length == 0
          ? html`
        <!--If there is no pets in dashboard-->
        
            <p class="no-pets">No pets in dashboard</p>
         `
         : nothing
        }
        </div>

    </div>
</section>
`

export const dashboardView = (ctx) => {

    petServices.getAll()
        .then(pets => {
            ctx.render(dashboardTemplate(pets));
        })
        .catch(err => {
            alert(err)
        })

}