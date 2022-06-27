const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
            origin: ['*']
        }
    }
});

const init = async () => {
    server.route(routes);
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`)
}

init();