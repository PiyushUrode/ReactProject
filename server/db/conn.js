const mongoose = require('mongoose')

const DB = `mongodb+srv://Piyushurode:Piyushurode@cluster0.nxold4d.mongodb.net/test`

mongoose.connect(DB).then((result) => {
    console.log("connection sucess")
}).catch((err) => {
    console.log("some problem comes")
});