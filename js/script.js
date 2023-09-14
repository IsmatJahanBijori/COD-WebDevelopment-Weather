// const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dhaka&days=3';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '618e389175mshb95579b41e4d31ep1ca6e6jsnbfea83ca75fa',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};



// const weather=(city)=>{
// cityName.innerHTML=city
fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dhaka&days=3', options).then(res => res.json()).then(data => {
    console.log(data)
    console.log(data.forecast.forecastday)
    // console.log(data.forecast.forecastday[0].astro.sunrise)
    temp_c.innerHTML = data.current.temp_c
    city.innerHTML = data.location.name
    country.innerHTML = data.location.country
    wind_kph.innerHTML = data.current.wind_kph
    wind_mph.innerHTML = data.current.wind_mph
    humidity.innerHTML = data.current.humidity
    cloud.innerHTML = data.current.cloud
    text.innerHTML = data.current.condition.text
    feelslike_c.innerHTML = data.current.feelslike_c
    sunrise1.innerHTML = data.forecast.forecastday[0].astro.sunrise
    sunrise2.innerHTML = data.forecast.forecastday[1].astro.sunrise
    sunrise3.innerHTML = data.forecast.forecastday[2].astro.sunrise
    sunset1.innerHTML = data.forecast.forecastday[0].astro.sunset
    sunset2.innerHTML = data.forecast.forecastday[1].astro.sunset
    sunset3.innerHTML = data.forecast.forecastday[2].astro.sunset
    date1.innerHTML = data.forecast.forecastday[0].date
    date2.innerHTML = data.forecast.forecastday[1].date
    date3.innerHTML = data.forecast.forecastday[2].date
    avg_temp1.innerHTML = data.forecast.forecastday[0].day.avgtemp_c
    avg_temp2.innerHTML = data.forecast.forecastday[1].day.avgtemp_c
    avg_temp3.innerHTML = data.forecast.forecastday[2].day.avgtemp_c
    // for (let i=0 ; i<data.forecast.forecastday[i]; i++){
    //     sunrise.innerHTML=data.forecast.forecastday[i].astro.sunrise
    // }
    // max_temp.innerHTML= data.
    // min_temp.innerHTML= data.
})
// }


