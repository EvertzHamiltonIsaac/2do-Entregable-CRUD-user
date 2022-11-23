// En este archivo vamos a tener las rutas y los verbos de la misma.
//Tenemos que usar las rutas de express y asi es que se importa
const router = require('express').Router()

const MVC_services = require('./users.services')

router.get('/users', MVC_services.getAllUsers)
router.post('/users', MVC_services.postUser)
router.delete('/users/:id', MVC_services.deleteUserById)
router.put('/users/:id', MVC_services.UpdateUserById)
router.get('/users/:id', MVC_services.getUserById)
module.exports = router