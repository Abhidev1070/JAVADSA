import express from "express"

const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    console.log("Hello GET");
});

// app.post('/',(req,res)=>{
//  
// });

// app.PUT('/',(req,res)=>{
//  
// });
// app.delete('/',(req,res)=>{
 
// });

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)

}) 