# PAQUETES USADOS (con ver. de uso inicial):

- definir variables de entorno en el SO no en un archivo, mayor seguridad
    "dotenv": "^15.0.0",
- framework para config rutas
    "express": "^4.17.2",
- ver las peticiones
    "morgan": "^1.10.0",
- modulo para config de sql server
    "mssql": "^8.0.1"
- reiniciar el codigo cada vez que se hace un cambio
    "nodemon": "^2.0.15"
- compilar de js que convierte js moderno a soportado
    babel
- validacion que se reciba un dato
    "express-validator": "^6.14.0",
- Cross origin resource sharing (CORS) es un mecanismo basado en cabeceras http que permite a los servidores indicar a los navegadores si deben permitir la carga de recursos para un origen distinto al suyo (dominio, esquema o puerto).
    "cors": "^2.8.5",
- Modulo para la subida de imagenes.
    "multer": "^1.4.4"

# SCRIPTS:
al ejecutar "npm run dev" ejecutara el siguiente comando ejecutando index.js haciendo uso de nodemon
    "dev": "nodemon src/index.js --exec babel-node"

Para ejecutar los Requests es necesario tener la extension RESTCliente de VSCode

# NOTA:
-D : --save-dev -> is used to save the package for development purpose. Example: unit tests, minification..
--save o el normal sin nada-> is used to save the package required for the application to run.
