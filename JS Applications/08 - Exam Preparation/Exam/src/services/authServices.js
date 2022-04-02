
const baseUrl='http://localhost:3030/users'

export const saveUser = user => {
    if (!user.accessToken) {
      return;
    }
  
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const clearUser = () => {
    localStorage.removeItem('user');
  };
  
  export const getUser = () => {
    const serializedUser = localStorage.getItem('user');
  
    if (serializedUser) {
      const user = JSON.parse(serializedUser);
  
      return user;
    }
  };
  
  export const getToken = () => getUser()?.accessToken;

export const login=(email,password)=>{
  return fetch(`${baseUrl}/login`,{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({
       email,
       password
    })
  })
  .then(res=>{
    if (!res.ok) {
        alert('Something went wrong!');
        return;
      }
      return res.json();
  })
  .then(user=>{
      saveUser(user)
  })
  .catch(err=>{
      throw err
  })
}


export const register=(email,password)=>{
    return fetch(`${baseUrl}/register`,{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify({
         email,
         password
      })
    })
    .then(res=>{
        if (!res.ok) {
            alert('Something went wrong!');
            return;
          }
          return res.json();
    })
    .then(user=>{
        saveUser(user)
    })
  
  }

  export const logout=()=>{
      return fetch(`${baseUrl}/logout`,{
        method:'GET',
        headers:{
        
             'X-Authorization':getToken()
        },
      })
      .then(res=>{
        clearUser();
      })
      
  }