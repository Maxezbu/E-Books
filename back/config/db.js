const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ecommerce:ecommerce@ecommerce.ewxps.mongodb.net/ecommerce?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB CONNECT!!"))
  .catch((e) => console.log("DB NO CONNECT ERROR"));

// 1° REQUERIR MONGOOSE
// 2° CONECTARLO A LA DB
// 3° CREAMOS LOS MODELOS A USAR (REFERENCIAR BIEN CADA ENTIDAD)
// 4° CREAR ARCHIVO SEED (SOLO PARA PRODUCTOS) ---------->>>>>> LOGRADO
// 5° CREAR RUTAS
// 6° CREAR CONTROLADORES
