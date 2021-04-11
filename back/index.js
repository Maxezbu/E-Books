//SERVER
require("./config/db");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(cors())
// Logger para mostrar todos los request que llegan al servidor
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Middleware de rutas//
app.use("/api", routes);

app.listen(5000, () => console.log("listenning on port 5000"));
