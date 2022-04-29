const mongoose = require("mongoose");
const tareaEsquema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    puntos: {
        type: Number,
        required: true
    },
    materia: {
        type: String,
        required: true
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("Tarea", tareaEsquema)