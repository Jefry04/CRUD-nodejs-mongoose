const express = require ("express");
const cors = require ("cors");
const user = require("./src/routes/user")
const review = require ("./src/routes/review")
const {connect} = require ("./src/db");

const port = 8080;
const app =  express();
connect ();

app.use(express.json());
app.use(cors());

app.use("/users", user);
app.use("/reviews", review);

app.listen(port, ()=>{
    console.log(`server running in http://localhost:${port}`)
})

