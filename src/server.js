const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: 5000,
    host: 'localhost',
});

const init = async () => {
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`)
}

init();