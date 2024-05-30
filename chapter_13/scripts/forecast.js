const key = 'emX4EAa53sCrXpHw5qrImQNICx1naoQr'

// get weather imformation
const getWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const reponse = await fetch(base + query)
    const data = await reponse.json()

    // console.log(data)
    return data[0]

}


// get city information
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const reponse = await fetch(base + query)
    const data = await reponse.json()

    // console.log(data[0])
    return data[0]

}

