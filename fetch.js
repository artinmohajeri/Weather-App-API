const $ = document.querySelector.bind(document);
let counter = 1

const urls = [
    "https://api.weatherapi.com/v1/current.json?key=e00ef2ca448f4a928b2141137230711&q=London&aqi=no",
    "https://api.weatherapi.com/v1/current.json?key=e00ef2ca448f4a928b2141137230711&q=New york&aqi=no",
    "https://api.weatherapi.com/v1/current.json?key=e00ef2ca448f4a928b2141137230711&q=tokyo&aqi=no",
    "https://api.weatherapi.com/v1/current.json?key=e00ef2ca448f4a928b2141137230711&q=paris&aqi=no",
    "https://api.weatherapi.com/v1/current.json?key=e00ef2ca448f4a928b2141137230711&q=california&aqi=no",
    "https://api.weatherapi.com/v1/current.json?key=e00ef2ca448f4a928b2141137230711&q=dubai&aqi=no",
]

urls.forEach(function(url){
    async function getCityName(url){
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json()
            return data
        }else{
            throw new Error("data not found")
        }
    }
    
    getCityName(url).then(function(data){
        $(`#city${counter}`).innerHTML = data["location"]["name"]
        $(`#temp${counter}`).innerHTML = data["current"]["temp_c"] +" "+ "C°"
        $(`#wind${counter}`).innerHTML = data["current"]["wind_kph"] + " " + "km/h"
        $(`#humidity${counter}`).innerHTML = data["current"]["humidity"] + " " + "%"

        counter++
    }).catch(error => alert(error))
})

