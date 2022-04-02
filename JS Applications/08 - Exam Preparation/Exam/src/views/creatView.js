import *as petServices from '../services/petServices.js'
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

const creatTemplate=(addSubmitHandler)=>html `
   <!--Create Page-->
<section id="createPage">
    <form @submit=${addSubmitHandler} class="createForm">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>
`

export const creatView=(ctx)=>{
    const addSubmitHandler=(e)=>{
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

        petServices.crate(name,breed,age,weight,image)
        .then(book=>{
           ctx.page.redirect('/')
        })
        .catch(err=>{
            alert(err)
        })
    }
    ctx.render(creatTemplate(addSubmitHandler))
}