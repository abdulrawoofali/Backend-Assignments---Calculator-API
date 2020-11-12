const express = require('express')
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

module.exports = app;