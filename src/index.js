/*const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const findResult =(num1,num2,op)=>{
    if(op==='/' && num2===0){
        return {
            status: "error" , 
            message: "Cannot divide by zero"
        }
    }

    if(isNaN(num1)||isNaN(num1)){
        console.log("sent string....");
        return {
            
                status: "error" , 
                message: "Invalid data types"
        }
        
    }
    if(num1<-1000000 || num2 <-1000000 || resultOp(num1,num2,op)<-1000000){
        return {
            status: "error" , 
            message: "Underflow"
        }
    
    }
    if(num1>1000000 || num2 >1000000 || resultOp(num1,num2,op)>1000000){
        return {
            status: "error" , 
            message: "Overflow"
        }
    
    }
  
    function resultOp(num1,num2,op) {
        switch(op){
            case '+': return num1+num2;
            case '-': return num1-num2;
            case '*': return num1*num2;
            case '/': return num1/num2;
        }
    }

    switch(op){
        case '+':return{
            status: "success",
            message: "the sum of given two numbers",
            sum: num1+num2
        }
        case '-' :return{
            status: "success",
            message: "the difference of given two numbers",
            difference: num1-num2
        }
        case '*':return{
            status: "success",
            message: "The product of given numbers",
            result: num1*num2
        }
        case '/': return{
            status: "success",
            message: "The division of given numbers",
            result: num1/num2
        }
    }
   

}


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
// your code goes here


app.get("/welcome",(req,res)=>{
    res.send("Hello world!");
});


app.post("/add/:num1/:num2",(req,res)=>{
    console.log("post calling....");
    const num1 =parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    
    
    res.status(200).json(findResult(num1,num2,'+'));
    
});

app.post("/sub/:num1/:num2",(req,res)=>{
    console.log("sub calling....");
    const num1 =parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    
    
    res.status(200).json(findResult(num1,num2,'-'));
    
});
app.post("/multiply/:num1/:num2",(req,res)=>{
    const num1 =parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    
    
    res.status(200).json(findResult(num1,num2,'*'));
    
    
});
app.post("/division/:num1/:num2",(req,res)=>{
    const num1 =parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    
    
    res.status(200).json(findResult(num1,num2,'/'));
    
    
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;*/






const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res)=>{
    res.send("Hello world!");
})

app.post("/add", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(Number(num1) !== parseFloat(num1)  || Number(num2) !== parseFloat(num2)){
        //res.status(404).send("invalid data types");
        res.send({"status": "error","message": "Invalid data types"});
        return;
    }
    
    if(parseFloat(num1)> 1000000  || parseFloat(num2) > 1000000){
        //res.status(404).send("Overflow");
        res.send({"status": "failure","message": "Overflow"});
        return;
    }

    const result = parseFloat(num1) + parseFloat(num2);

    const answer = {
        "status": "success",
        "message": "the sum of given two numbers",
        "sum": result
    }
    res.send(answer);
})

app.post("/sub", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(Number(num1) !== parseFloat(num1)  || Number(num2) !== parseFloat(num2)){
        //res.status(404).send("invalid data types");
        res.send({"status": "error","message": "Invalid data types"});
        return;
    }
    
    if(parseFloat(num1)< -1000000  || parseFloat(num2) < -1000000){
        //res.status(404).send("Underflow");
        res.send({"status": "failure","message": "Underflow"});
        return;
    }

    const result = parseFloat(num1) - parseFloat(num2);

    const answer = {
        "status": "success",
        "message": "the difference of given two numbers",
        "difference": result
    }
    res.send(answer);
})

app.post("/multiply", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(Number(num1) !== parseFloat(num1)  || Number(num2) !== parseFloat(num2)){
        //res.status(404).send("invalid data types");
        res.send({"status": "error","message": "Invalid data types"});
        return;
    }
    
    if(parseFloat(num1)> 1000000  || parseFloat(num2) > 1000000){
        //res.status(404).send("Overflow");
        res.send({"status": "failure","message": "Overflow"});
        return;
    }

    const result = parseFloat(num1) * parseFloat(num2);

    const answer = {
        "status": "success",
        "message": "The product of given numbers",
        "result": result
    }
    res.send(answer);
})

app.post("/division", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    

    if(parseFloat(num2) === 0){
        //res.status(400).send("Cannot divide by zero");
        res.send({"status": "error","message": "Cannot divide by zero"});
        return;
    }

    const result = parseFloat(num1) / parseFloat(num2);

    const answer = {
        "status": "success",
        "message": "The division of given numbers",
        "result": result
    }
    res.send(answer);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
