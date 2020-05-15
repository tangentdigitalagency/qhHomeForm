const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

require('./Routes/BusinessPage')(app)
require('./Routes/UserRequests')(app)
require('./Routes/ApproveRequest')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}

const db = 'mongodb://localhost:27017/aDelivery'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Mongo DB Connected Successfully'))
    .catch(err => console.log(err))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})