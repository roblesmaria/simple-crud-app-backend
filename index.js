const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js")

//middleware
app.use(express.json())

//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("hello from node API Server Updated")
})


mongoose.connect("mongodb+srv://mroblesa:DfSxH8zhmM0vzghT@backenddb.gh0h1.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb")
.then(() => {
    console.log("conneted to database!")
    app.listen(3000, () =>
    {
        console.log('Server is running on port 3000')
    })
})
.catch(() => {
    console.log("connection failed!")
})
