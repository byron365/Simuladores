const express = require("express");
const path = require("path");
const os = require('os')

const app = express();
const PORT = 3000;

// Importar rutas
const paginasRoutes = require("./routes/paginas");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Usar las rutas
app.use("/", paginasRoutes);

//Detectando IP

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (let name of Object.keys(interfaces)) {
        for (let net of interfaces[name]) {
            if (net.family === "IPv4" && !net.internal) {
                return net.address;
            }
        }
    }
}

const localIP = getLocalIP();
console.log("IP Local:", localIP);

// Escuchar en red local
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://${localIP}:${PORT}`);
});
