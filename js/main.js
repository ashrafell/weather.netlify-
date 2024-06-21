let APIData
let DefCityName = 'cairo'
async function getWeather() {
    APIData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=04c6bcd48ad04e7aacd100814241506&q=${DefCityName}&days=3`)
    result = await APIData.json()

    displayData(result)
}
getWeather()

function displayData(result) {
    let CityName = result.location.name
    let CurrentDay = result.current
    let AllDays = result.forecast.forecastday
    let date = CurrentDay.last_updated
    let box = `
    
                    <div class="col-md-4">
                        <div class="row">
                            <div class="line1 d-flex justify-content-between col-md-12">
                                <h4 id="demo"></h4>
                                <span>21June</span>
                            </div>
                            <div class=" col2 col-md-12">
                                <h3 id="city" class="ms-3 pt-4">${CityName}</h3>
                                <h1 id="temp-c" class="ms-3">${CurrentDay.temp_c}'C</h1>
                                <h2 id="icon" class=" ms-5 mt-2 "><img  src="http:${CurrentDay.condition.icon}"></img></h3>
                                <span id="condition" class="ms-3 mt-2 ">${CurrentDay.condition.text}</span>
                                <div class="icons mb-1 mt-3 pb-4">
                                    <span id="raining" class="ms-3 "><img src="img/icon-umberella.png" alt="">
                                        ${CurrentDay.feelslike_c}%</span>
                                    <span id="wind" class="ms-3"><img src="img/icon-wind.png" alt=""> ${CurrentDay.wind_kph}km/h</span>
                                    <span id="direction" class="direction ms-3"><img src="img/icon-compass.png" alt="">
                                    ${CurrentDay.wind_dir}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    `

    for (let i = 1; i < AllDays.length; i++) {

        box += `
    
                    <div class=" col-md-4">
                        <div class="line2 text-center col-md-12">
                            <h4>${AllDays[i].date}</h4>
                        </div>
                        <div class="col3 text-center col-md-12">
                            <h3 class="pt-3"><img src="http:${AllDays[i].day.condition.icon}"></img></h3>
                            <h2 class="mb-0 pt-5">${AllDays[i].day.maxtemp_c}'C</h2>
                            <h4 class="mb-3">${AllDays[i].day.mintemp_c}'C</h4>
                            <span>${AllDays[i].day.condition.text}</span>
                        </div>
                    </div>

        `

        document.getElementById('conditions').innerHTML = box

    }



    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date(date);
    let day = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = day;

}

//function getDayName() {
//const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d = new Date(date);
// let day = weekday[d.getDay()];
// document.getElementById("demo").innerHTML = day;
//}



//${getDayName(AllDays[i].date)}





function searchOnKeyUp(input) {
    let searchInput = document.getElementById("search-input").value;
    DefCityName = searchInput
    getWeather()


}