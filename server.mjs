import { createServer } from 'node:http';
 const hostname='127.0.0.1';
 const port=3000;
 const server = createServer(( req, res) => {
    console.log('recevied request ....', req.url, req.method);

    if (req.url=='/');
    if(req.method=='Get') {
        res.statusCode=200;
        res.setHeader('content-Type', 'text/plain');
        res.setHeader('Acess-Control-Allow-Origin' , "*");

        res.end("Mithilesh ");
        //console.log(res)
    }
    if( req.method == 'option'){
        res.statusCode=200;
        res.setHeader('content-Type ', 'application/json' );
        res.setHeader('Acess-Control-Allow-Orign ', 'http://127.0.0.1.5500');
        res.setHeader('Acess-Control-Allow-Methods  ', "POST ", GET, OPTIONS);
        res.setHeader('Acess-Control-Allow-Header ', '* ');
        res.end('OK');

    }

    if(req.method=='post') {
        //console.log(req.body ());
        console.log('postmethod ....')
        res.statusCode=200;
        res.setHeader('content-Type ', 'text/plan ');
        res.setHeader('Acess-Control-Allow-Orgin', "*");

        res.end(JSON. stringify( { surname :"KUMAR"}));

    }
 }
});

server.listen(port,hostname, ()=> {
    console.log('server running at http ')
})