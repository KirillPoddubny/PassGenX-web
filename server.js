const Express = require(`express`);
const config = require(`./settings.json`);
const server = Express();

let port = config.port;
let host = config.host;

server.use(Express.static("site"))

server.get("/", (req, res) => {
    res.sendFile("/index.html");
});

server.get("/download", (req, res) => {
    res.download("PassGenX.jar");
});

server.listen(port, () => {
    console.log(`сервер запущен и ожидает подключений: http://${host}:${port}`);
});