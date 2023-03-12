const path=require('path'); // Node-Core Module.

const express=require('express'); // Prod-Dependency.
const bodyparser=require('body-parser');  // Prod-Dependency.

const router=require('./routes/route');

const app=express(); // Express App.

// Middleware to Parse Incoming Request Data.
app.use(bodyparser.urlencoded({extended:false}));

// Middlware to Serve Static Files in public directory.
app.use(express.static(path.join(__dirname,'public')));

app.use('/user',router);



// Page not Found Middleware / that will handle all the Routes.
app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


// Listening on Port 3000
app.listen(3000);
