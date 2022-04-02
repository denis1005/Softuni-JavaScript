import *as petServices from '../services/petServices.js'
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

const editTemplate=(submitHandler,pet)=>html `
  <!--Edit Page-->
<section id="editPage">
    <form @submit=${submitHandler} class="editForm">
        <img src=${pet.image}>
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value=${pet.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value=${pet.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value=${pet.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value=${pet.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value=${pet.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`

export const editView=(ctx)=>{
    const submitHandler=(e)=>{
        e.preventDefault();
        let formData=new FormData(e.currentTarget);
        let name= formData.get('name');
        let breed= formData.get('breed')
        let age= formData.get('age')
        let weight= formData.get('weight')
        let image= formData.get('image')

        if(name==''|| breed==''||age==''|| weight=='',image==''){
            alert('Not valid data');
            return;
        }

        petServices.edit(name,breed,age,weight,image,ctx.params.id)
        .then(pet=>{
           ctx.page.redirect(`/details/${ctx.params.id}`)
        })
        .catch(err=>{
            alert(err)
        })
    }

    petServices.getOne(ctx.params.id)
    .then(pet=>{
      ctx.render(editTemplate(submitHandler,pet))
    })
    .catch(err=>{
        alert(err)
    })
    

}