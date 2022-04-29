const Tarea = require("../models/tarea");

function createTarea(req, res) {
    console.log("Creando tarea...")
    /* console.log(req.body);
    return res.status(200); */
    console.log(req.body);
    let tarea = new Tarea({
        id: req.body.id,
        name: req.body.name,
        puntos: req.body.puntos,
        materia: req.body.materia,
        fechaEntrega: req.body.fechaEntrega
    });
    tarea.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
}

function updateTarea(req, res) {
    console.log("Actualizando tarea...")
    console.log(req.body);
    /* console.log(req.body);
    return res.status(500).send("Hubo un error en el servidor"); */
    const tareaId = req.params.id; // ID de la tarea que vamos a actualizar
    const nuevaTarea = req.body;
    // Llamar a la bd
    Tarea.findByIdAndUpdate(tareaId, nuevaTarea, {new: true}, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

function findAllTareas(req, res) {
    console.log("Encontrando todas las tareas...")
    /*console.log(req.body);
    return res.status(200).send("Estas son las tareas");*/
    Tarea.find((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 10
            });
        }
        return res.json({
            data: result
        });
    });
}

function deleteTarea(req, res) {
    console.log("Eliminando tarea...")
    /* console.log(req.body);
    return res.status(500).send("Hubo un error en el servidor"); */
    const tareaId = req.params.id; // ID de la tarea que vamos a actualizar
    const nuevaTarea = req.body;
    // Llamar a la bd
    Tarea.findByIdAndDelete(tareaId, {new: true}, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

module.exports = {
    createTarea,
    updateTarea,
    findAllTareas,
    deleteTarea
}