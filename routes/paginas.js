const express = require("express");
const path = require("path");

const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Ruta Simulador Fisica
router.get("/movimiento", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/simulador-fisica.html"));
});

// Ruta Simulador plantas
router.get("/plantas", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/simulador-plantas.html"));
});


// Ruta Simulador trafico
router.get("/trafico", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/simulador-trafico.html"));
});

module.exports = router;