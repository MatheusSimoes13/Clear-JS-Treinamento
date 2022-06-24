const http = require('http');

let server = http.createServer((req,res) =>{
    console.log(req.url);
    console.log(req.method);

    switch(req.url){
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Olá</h1>');
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users:[{
                    name:'Matheus',
                    email:'top@gmail.com',
                    }
                ]
            }));
            break;
    }

})

server.listen(3000,'127.0.0.1'), ()=>{
    console.log('rodando');
}