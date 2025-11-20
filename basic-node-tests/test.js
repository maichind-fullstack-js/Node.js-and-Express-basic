//const { greet } = require("./greet.js");

/* 
    MODULES 
*/

/* CONSOLE */
//console.log(greet('Mind'));
//console.warn('warning');
//console.error(new Error('Error!!'));


/* PROCESS */
//const env = process.env;
//const args = process.argv[2];
//console.log(process.memoryUsage());


/* OS */
//const os = require('os');
//const type = os.type(); 
//const dir = os.homedir();
//const time = os.uptime();
//const user = os.userInfo();
//console.log(type, dir, time, user);


/* TIMERS */
/* function theme (theme) {
    console.log(`practicando ${theme}`);
} */
//setImmediate(theme, 'Express');
//setTimeout(theme, 1000, 'Nodejs');
/* setTimeout(() => {
    console.log('test timeout');    
}, 1000); */
//setInterval(theme, 1500, 'JS');
/* setInterval(() => {
    console.log('.JS');    
}, 2000); */


/* FS */
//const fs = require('fs');
/* fs.readFile('./index.html', 'utf-8', (err, content) => {
    err && console.log(err);
    content && console.log(content);    
}); */
//const archivo = fs.readFileSync('./index.html', 'utf-8');
//console.log('archivo leido Sync', archivo);

/* fs.rename('./main.html', './index.html', (err) => {
    if (err) throw err;
    console.log('Cmabiado exitosamente');    
}); */

/* fs.appendFile('./index.html', '<p>Nodejs - Express</p>', (err) => {
    if (err) throw err;
    console.log('Información agregada');    
}); */

/* fs.writeFile('./index.html', 'new content', (err) => {
    if (err) throw err;
    console.log('contenido reemplazado'); 
}); */

/* fs.unlink('./ind.html', (err) => {
    if (err) throw err;
    console.log('Archivo eliminado');    
}); */


/* NPM */
// npm init


/* EVENTS */
//const EventEmitter = require('events');
//const emitterProducts = new EventEmitter();
/* emitterProducts.on('compra', (total) => {
    console.log(`compra realizada por $${total}`);    
}); */
//emitterProducts.emit('compra', 500);


/* PROMISES */
//const promise = false;
/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!promise) reject('Promesa rechazada...');
        if (promise) resolve('Promesa cumplida!');
    }, 3000);
}); */
/* const resolved = (valor) => {
    console.log(valor);    
} */
/* const rejected = (reason) => {
    console.log(reason);    
} */
//myPromise.then(resolved, rejected);

/* const statusFn = () => {   
    return Math.random() < 0.7;    
} */
/* const buyPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusFn()) resolve('Pedido exitoso!');
        if (!statusFn()) reject('Ocurrió un error');
    }, 3000);
}) */
/* buyPizza
    .then((message) => {
        console.log(message);        
    })
    .catch((errorMessage) => {
        console.log(errorMessage);        
    }) */

/* function orderProduct(product) {
    return new Promise((resolve, reject) => {
        console.log(`ordenando ${product}`);
        setTimeout(() => {
            if (product === 'taza') resolve('Ordenando taza...');
            if (product !== 'taza') reject('No existen productos.');
        }, 2000);
    });
} */

/* function procesing(response) {
    return new Promise((resolve, reject) => {
        console.log('procesando respuesta');
        console.log(`La respuesta fue: "${response}"`);      
        setTimeout(() => {
            resolve('Gracias por su compra');
        }, 4000);          
    })
} */

/* async function doBuy(product) {
    try {
        const response = await orderProduct(product);
        console.log('respuesta recibida');
        const processResponse = await procesing(response);
        console.log(processResponse);        
    } catch (error) {
        console.log(error);           
    }        
} */

//doBuy('taza');


/* HTTP */
//const http = require('http');
//const { infoCourses } = require('./courses.js');
//const { json } = require('stream/consumers');
c/* onst server = http.createServer((request, response) => {
    const { method } = request;
    response.setHeader('Content-Type', 'application/json');
    if (method === 'GET') return handleRequestGET(request, response);    
    if (method === 'POST') return handleRequestPOST(request, response);    
    return response.statusCode = 501, 
        response.end(JSON.stringify(`el método ${method} no es manejado por el servidor`));
}); */

/* function handleRequestGET(request, response) {
    const path = request.url;
    if (path === '/') return response.end(JSON.stringify('Welcome to the server HTTP'));
    else if (path === '/cursos') return response.end(JSON.stringify(infoCourses));
    else if (path === '/cursos/prog') return response.end(JSON.stringify(infoCourses.programming));
    else if (path === '/cursos/math') return response.end(JSON.stringify(infoCourses.math));
    else {
        response.statusCode = 404;
        return response.end(JSON.stringify({message: 'Curso no encontrado'}));
    }
} */
/* function handleRequestPOST(request, response) {
    const path = request.url;
    if (path === '/cursos/prog') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log('body:', JSON.parse(body));
            console.log('body name:', JSON.parse(body).name);
            return response.end(JSON.stringify('Solicitud POST cursos/prog recibida'));
        });
    }
    else {
        response.statusCode = 404;
        return response.end(JSON.stringify({message: 'Curso no encontrado'}));
    }
} */

//const PUERTO = 3000;
/* server.listen(PUERTO, () => {
    console.log('Server Listening');    
}); */


/* URL */
//const url = new URL('https://www.example.com/cursos/programacion?curso=nodejs&nivel=basico');
//console.log(url.hostname);
//console.log(url.pathname);
//console.log(url.searchParams);
//console.log(url.searchParams.get('curso'));
