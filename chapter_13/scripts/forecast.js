const key = 'rKpKwtcWO5svrWaRh6GAzOBTKUfDjDaa'

// get weather imformation
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const reponse = await fetch(base + query)
    const data = await reponse.json()

    // console.log(data)
    return data[0]

}


// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const reponse = await fetch(base + query)
    const data = await reponse.json()

    // console.log(data[0])
    return data[0]

}

