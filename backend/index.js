var express=require('express')
var compiler=require('compilex')
const app=express()
var cors=require('cors')
app.use(cors())
app.use(express.json())
var option={stats:true}
compiler.init(option)

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post("/exec",(req,res)=>{
    console.log(req.body)
    var {code,input,language}=req.body
    var envData = { OS : "windows"}; 
    console.log(input)

    compiler.compilePythonWithInput( envData , code , input ,  function(data){
        console.log(data)
        res.json({"msg":data})  
    });
    
})
app.listen(1001,()=>{
    console.log("Successfully running....")
})