const express = require('express')
const cors = require("cors");

const dbConnect = require('./config/dbConnect')
const authRouter = require("./features/auth/auth.router")

const app = express()

app.use(express.json())
app.use(cors());

app.use("/auth", authRouter );

app.get('/', (req, res) => res.send('hello'))

app.listen(8080, async () => {
    await dbConnect();
    console.log('server started on port 8080')
})