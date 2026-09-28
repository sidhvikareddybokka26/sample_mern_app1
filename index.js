let express=require('express');
let app=express();
let emproutes=require('./routes/hr_route');

app.use("/api/emp",emproutes);
// localhost:3000/api/emp/register =>post
// localhost:3000/api/emp/login =>post
// localhost:3000/api/emp/viewtask =>get
// localhost:3000/api/emp/updateprofile =>patch

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})