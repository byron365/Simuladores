# 📘 Simuladores Virtuales - Servidor Local con Node.js

## 📌 Descripción

Este proyecto consiste en un servidor web sencillo desarrollado con **Node.js y Express**, diseñado para servir páginas HTML en una red local.

Permite que múltiples dispositivos conectados a la misma red WiFi accedan a los simuladores educativos mediante la dirección IP local del servidor.

---

# 🚀 Tecnologías Utilizadas

* **Node.js** → Entorno de ejecución para JavaScript en el servidor
* **Express.js** → Framework minimalista para crear servidores web
* **HTML5** → Estructura de las páginas
* **CSS3** → Estilizado del panel de simuladores
* **JavaScript (Frontend)** → Interacción básica en navegador

---

# 📦 Dependencias del Proyecto

Este proyecto utiliza:

```bash
express
```

Instalada mediante:

```bash
npm install express
```



# 🛠 Requisitos Previos

Antes de ejecutar el proyecto debes tener instalado:

* Node.js (versión recomendada: LTS)

Verificar instalación:

```bash
node -v
npm -v
```


# ▶ Instalación y Ejecución

1️⃣ Clonar o descargar el proyecto

2️⃣ Instalar dependencias:

```bash
npm install
```

3️⃣ Ejecutar el servidor:

```bash
npm start
```

---

# 🌐 Acceso en Red Local

El servidor está configurado para escuchar en:

```
0.0.0.0
```

Esto permite acceso desde otros dispositivos en la misma red.

En la consola saldra la ip que se le asigno a tu dispositivo para que otros puedan acceder
el puerto por defecto es el 3000:

Por ejemplo

```
http://192.168.1.20:3000
```

---
