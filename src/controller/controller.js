const dotenv = require('dotenv');
const axios = require('axios')
dotenv.config();
module.exports.login = async(req,res) =>
{
    res.render("home")
}

module.exports.weather = async (req,res) => {
try {
        let {city} = req.body
        console.log(city)
        let url = process.env.BASEURL + 'q=' + city + "&appid=" + process.env.APPID
        console.log(url)
        let{data} = await axios.get(url);
        console.log("data is ", data)
        console.log('result',data.main.temp);
        let temperature = Math.ceil(data.main.temp - 273.15);
        res.render("wether",{city,temperature})
    }
    catch (error){
        console.log('Error is' , error.message);
    }

}