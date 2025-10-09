
express=require("express")

app=express()

app.listen(5000,()=>{
    console.log("server start")
})

// cors 
cors=require("cors")
app.use(cors());


// bodyparser 
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({}))

app.post("/signup",(req,res)=>{
    console.log(req.body)
})