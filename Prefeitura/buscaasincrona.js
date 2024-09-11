function getUserByID (id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const users = [
                {id:1,nome:"Jonh Doe"},
                {id:2,nome:"Jane Doe"},
                {id:3,nome:"Robert Doe"},
            ]
            const user = users.find(user => user.id === id);    //busca e retorn
            if (user){
                resolve(user)}
            
            else{
                reject(new Error("usuário não encontrado"))
            }
            
        },1000)
    })
}

async function fetchUser(id){
    try {
        const user = await getUserByID(id);
        console.log(user)
    }
    catch(error){
        console.error(error.message)
    }

}

fetchUser(2)