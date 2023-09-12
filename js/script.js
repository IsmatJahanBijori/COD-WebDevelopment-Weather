const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dhaka&days=3';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '618e389175mshb95579b41e4d31ep1ca6e6jsnbfea83ca75fa',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};



fetch(url, options).then(res => res.json()).then(data => {
    console.log(data)
    temp_c.innerHTML = data.current.temp_c
    city.innerHTML = data.location.name
    country.innerHTML = data.location.country
    wind_kph.innerHTML= data.current.wind_kph
    wind_mph.innerHTML= data.current.wind_mph
    humidity.innerHTML = data.current.humidity
    cloud.innerHTML = data.current.cloud
    text.innerHTML = data.current.condition.text
    // sunset.innerHTML= data.
    // min_temp.innerHTML= data.
    feelslike_c.innerHTML= data.current.feelslike_c
    // sunrise.innerHTML= data.
    // sunset.innerHTML= data.
    // max_temp.innerHTML= data.
})




// data.current.wind_kph
//data.location
//data.forecast.forecastday[0].astro.sunrise