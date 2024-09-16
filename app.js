import express from 'express' ;
import bodyParser from 'body-parser';
import jokes from './jokes.js';
import ejs from 'ejs';

let app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/',(req,res)=>{

const displayBy = req.query.displayBy;


let joke = null;

if(displayBy==="id"){
    let id = req.query.jokeid;
    if (id){
        id=parseInt(id)-1;
    }

    if (id>=0 && id< jokes.length){
        joke = jokes[id];
    }
}else if(displayBy==="type"){
    const type =req.query.joketype;
    joke = jokes.find(j=>j.jokeType===type);
}

res.render('index.ejs',{ joke })
});





app.listen(3000,()=>{
    console.log("your project is runnning ");
    
})