const { validationResult } = require('express-validator')
const Usuario = require('./../models/usuario.model')
const { response } = require('express')

const getUsuarios = async (req, res) => {
    res.json({
        ok: true,
        data: await Usuario.find()
    })
}

const crearUsuario = async (req, res = response) => {
    const { email, password, nombre } = req.body
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }
    try {

        const existeEmail = await Usuario.findOne({ email })

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            })
        }

        const usuario = new Usuario(req.body)
        await usuario.save()
        res.json({
            ok: true,
            data: usuario
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        })
    }
}

module.exports = {
    getUsuarios,
    crearUsuario
}