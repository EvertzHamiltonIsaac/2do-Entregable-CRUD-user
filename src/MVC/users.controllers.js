//Realiza las acciones realcionadas con la base de datos

const e = require("express")

//!Modelo de la base de datos
/*
{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}
*/
const usersDB = []
let idDB = 1

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const user = usersDB.find(item => item.id == id)
    return user
}

const createUser = (data) => {
     const newUser = { 
        id: idDB++,
	    first_name: data.first_name,
	    last_name: data.last_name,
	    email: data.email,
	    password: data.password,
	    birthday: data.birthday
     }

     usersDB.push(newUser)
     return newUser
}


//Optionals

const deleteUserById = (id) => {
        const result = usersDB.filter(user => user.id != id) 
        const removed = usersDB.filter(user => user.id == id) 
        usersDB.splice(0, usersDB.length)
        result.map(user => usersDB.push(user))

        return removed[0]
}

const UpdateUserById = (id, data) => {
    const result = usersDB.filter(user => user.id != id) 
    const removed = usersDB.filter(user => user.id == id) 
    
    removed[0] = {
        id: data.id,
        first_name: data.first_name,
	    last_name: data.last_name,
	    email: data.email,
	    password: data.password,
	    birthday: data.birthday
    }
    
    result.splice(removed[0].id - 1,0, removed[0])
    
    usersDB.splice(0, usersDB.length)
    result.map(user => usersDB.push(user))

    return removed[0]
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    deleteUserById,
    UpdateUserById
}