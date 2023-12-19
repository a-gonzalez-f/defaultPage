// Creamos el servidor de archivos estáticos
const express = require("express");

// Creamos una app
const app = express();

// method-override permite capturar cualquier petición que no sea ademas de post o get
const methodOverride = require("method-override");

const initSession = require('./src/middlewares/session');

// Definición de rutas
// se hace en carpeta Routes y acá las llamamos
// --------------

// Routes Imports
const mainRoutes = require("./src/routes/main.routes");
const adminRoutes = require("./src/routes/admin.routes");
const authRoutes = require("./src/routes/auth.routes");
const shopRoutes = require("./src/routes/shop.routes");
// --------------

const PORT = 3008;

app.set("view engine", "ejs");
// La siguiente app.set es para indicarle al motor ejs que las vistas van a estar en la carpeta esta
app.set("views", "./src/views");

app.use(initSession.initSession());
app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
  return next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));


// Configuramos las routes importadas para utilizarlos con middleware
app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/shop", shopRoutes);

// Error 404
app.use((req, res, next) => {
  res.status(404).send("La página no existe");
});
// --------------

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
