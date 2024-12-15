const date = document.getElementById('date')
const city = document.getElementById('city')
const tempImg = document.getElementById('tempImg')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const tempmax = document.getElementById('tempmax')
const tempmin = document.getElementById('tempmin')
const humidity = document.getElementById('humidity')


const months =['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']

let dateobj = new Date()

let month = months[dateobj.getMonth()]
let day = dateobj.getDate()
let year = dateobj.getFullYear()

date.innerHTML = `${month} ${day} ,${year}`

const app = document.getElementById('container')

const loadWeather = async () => {
    const cityName = document.getElementById('searchbarinput').value
    
    try{
        const resposne = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a673d2f4a369f0a1ad29c926b8928763`)
        const weatherData = await resposne.json()
        const daynight = weatherData.weather[0].icon
        
        console.log(weatherData)
    city.innerHTML = `${weatherData.name}`
    tempImg.innerHTML = ` <img src = http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png>`
    description.innerHTML = `${weatherData.weather[0].main}`
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp - 273.15)}°C</h2>`
    tempmax.innerHTML = `${weatherData.main.temp_max}`
    tempmin.innerHTML = `${weatherData.main.temp_min}`
    humidity.innerHTML = `${weatherData.main.humidity}`
  
    if(daynight.endsWith('d')){
        app.style.background = 'lightblue'
        
    }
    else{
        app.style.background='black'
        app.style.color = 'white'
    }
    
    }
    catch(error){
        console.error(error)
    }

}

document.getElementById('search').addEventListener('click',loadWeather)
