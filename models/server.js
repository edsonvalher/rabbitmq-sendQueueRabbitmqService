const express = require('express');
const cors = require('cors');
const routeServer = require("../routes/server.routes");
const { log } = require('../helper/tools');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8081;

        this.paths = {
            rutas: `/api/${process.env.VERSION}`
        }
        this.middleWares();
        this.routes();
    }
    middleWares() {
        this.app.use(cors());
        //carpeta publica
        this.app.use(express.static("public"));
        //serialize objects json
        this.app.use(express.json())

    }

    routes() {
        this.app.use(this.paths.rutas, routeServer)
    }
    //escucha de server
    listen() {
        this.app.listen(this.port, () => {
            //console.info(this.listen.name, `Service running on port ${this.port}`);
            log("listen", `Running on port ${this.port}`)
        });
    }
}
module.exports = Server;
