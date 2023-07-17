const getUsuarios = (req, res) => {
    res.json({
        ok: true,
        data: []
    })
}

const crearUsuario = (req, res) => {
    const { body } = req
    console.log({ body })
    res.json({
        ok: true,
        data: body
    })
}

module.exports = {
    getUsuarios,
    crearUsuario
}