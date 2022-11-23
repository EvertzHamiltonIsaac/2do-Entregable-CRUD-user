//En este archivo va todo lo relacionado con el req y res
//Aqui tambien se manejan los status //Recuerda convertir la data en Json

const MVC_controllers = require('./users.controllers')

/*
MVC_controllers.findAllUsers
MVC_controllers.findUserByID
MVC_controllers.createUser
MVC_controllers.deleteUserById
MVC_controllers.UpdateUserById
*/

const getAllUsers = (req, res) => {
    const data = MVC_controllers.findAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = MVC_controllers.findUserById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ message: 'id Not found' })
    }
}

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body
    const newUser = {
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    if (first_name && email && password) {
        const data = MVC_controllers.createUser(newUser)
        res.status(201).json(data)
    } else {
        res.status(400).json(
            {
                message: 'Bad structuration of data',
                fields: {
                    first_name: 'string',
                    last_name: 'string',
                    email: 'string',
                    password: 'string',
                    birthday: 'YYYY/MM/DD'
                }
            })
    }
}

const deleteUserById = (req, res) =>{
    const id = req.params.id
    if(id){
        const data = MVC_controllers.deleteUserById(id)
        res.status(200).json(data)
    }else {
        res.status(400).json({message: 'Invalid ID'})
    }
    
}

const UpdateUserById = (req, res) =>{
    const id = req.params.id
    const { first_name, last_name, email, password, birthday } = req.body

    const newUser = {
        id: +id,
        first_name,
        last_name,
        email,
        password,
        birthday
    }

    if (first_name && email && password) {
        const data = MVC_controllers.UpdateUserById(id, newUser)
        res.status(201).json(data)
    } else {
        res.status(400).json(
            {
                message: 'Bad structuration of data',
                fields: {
                    first_name: 'string',
                    last_name: 'string',
                    email: 'string',
                    password: 'string',
                    birthday: 'YYYY/MM/DD'
                }
            })
    }
    
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    deleteUserById,
    UpdateUserById
}