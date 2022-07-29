const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views')) /*Cuando uso la carpeta src hay que invocar esto*/

const mainRouter= require ('./routes/mainRouter.js')


app.listen(8000,()=> { 
    console.log("Servidor iniciado en el port http://localhost:8000");
})

app.use('/',mainRouter);