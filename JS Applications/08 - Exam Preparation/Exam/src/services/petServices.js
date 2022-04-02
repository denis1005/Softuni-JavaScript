import * as authService from '../services/authServices.js'

const baseUrl='http://localhost:3030/data'

export const getAll=()=>{
    return fetch(`${baseUrl}/pets?sortBy=_createdOn%20desc&distinct=name`)
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}

export const crate=(name,breed,age,weight,image)=>{
    return fetch(`${baseUrl}/pets`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'X-Authorization':authService.getToken()
        },
        body:JSON.stringify({
            name,
            breed,
            age,
            weight,
            image
        })
    })
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}

export const getOne=(id)=>{
    return fetch(`${baseUrl}/pets/${id}`)
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}

export const edit=(name,breed,age,weight,image,id)=>{
    return fetch(`${baseUrl}/pets/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
            'X-Authorization':authService.getToken()
        },
        body:JSON.stringify({
            name,
            breed,
            age,
            weight,
            image
        })
    })
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}

export const deletePet=(id)=>{
    return fetch(`${baseUrl}/pets/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json',
            'X-Authorization':authService.getToken()
        },
    })
    .then(res=>{

    })
    .catch(err=>{
        alert(err)
    })
    
}

export const donate=(id)=>{
    return fetch(`${baseUrl}/donation`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'X-Authorization':authService.getToken()
        },
        body:JSON.stringify({
            petId:id,  
        })
    })
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}

export const allDonations=(id)=>{
    return fetch(`${baseUrl}/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`,{
        method:'GET',
        headers:{
            'content-type':'application/json',
            'X-Authorization':authService.getToken()
        },
        
    })
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}

export const checkNumberDonations=(petId,userID)=>{
    return fetch(`${baseUrl}/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userID}%22&count`,{
        method:'GET',
        headers:{
            'content-type':'application/json',
            'X-Authorization':authService.getToken()
        },
        
    })
    .then(res=>res.json())
    .catch(err=>{
        alert(err)
    })
}



