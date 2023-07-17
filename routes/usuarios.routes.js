const { Router } = require('express')
const { check } = require('express-validator')
const { getUsuarios, crearUsuario } = require('./../controllers/usuarios.controllers')

const router = Router()

router.get('/', getUsuarios)
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'Debe ser un email válido').isEmail()
],
    crearUsuario)

module.exports = router