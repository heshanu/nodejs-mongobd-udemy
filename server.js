
const http=require('http');

const server=http.createServer((req,res)=>{
    //console.log(req);
    const {headers,url,method}=req;
    //console.log(headers,url,method);
    res.setHeader('Content-Type','text/html');
    res.write('FUCK the whole Universe!');
    res.end();
    console.log(req.headers.authorization);
   
});

const PORT=5000;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));