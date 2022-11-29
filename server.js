const express =  require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const WhetherCond = require('./src/route/wether.route')
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')
app.set('views','./src/view')
app.use(WhetherCond);

const port = process.env.PORT || 5000
app.listen(port ,() =>
console.log(`listening to ${port}`)

)
