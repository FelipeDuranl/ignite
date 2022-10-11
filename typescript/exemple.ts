type User = {
    name: string,
    email: string,
    address: {
        city: string,
        uf: string
    }
}

function showUserMenssage(user: User){
    return `Hello ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.uf}`
}

showUserMenssage({
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
        city: 'New York',
        uf: 'NY'
    }
})