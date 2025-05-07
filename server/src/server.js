const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const { Pool } = require("pg");
const server = express();

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
}); 

// Middleware de registro de solicitudes (morgan)
server.use(morgan("dev"));

// Middleware para procesar cookies
server.use(cookieParser("secreto"));

// Middleware para habilitar CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Especifica el origen exacto para entornos de producción
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Manejar solicitudes OPTIONS (preflights)
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

// Middleware para sesiones
server.use(
  session({
    store: new pgSession({
      pool: pool,
      tableName: "session", // puedes cambiar el nombre si quieres
    }),
    secret: process.env.SESSION_SECRET, // ponlo en un env en producción
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // true solo si estás en HTTPS
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// Middleware para procesar JSON en solicitudes
server.use(express.json());

// Middleware de enrutamiento
server.use("/", routes);

module.exports = server;
