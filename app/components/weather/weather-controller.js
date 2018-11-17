import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}

	convertF(kelvin) {
		let temp = (kelvin * 9 / 5) - 459.67
		return Math.floor(temp)
	}
	getWeather() {
		weatherService.getWeather(weather => {
			let temperature = this.convertF(weather.main.temp)
			let template = `<div>${weather.weather[0].description} - ${temperature}°F</div>`
			document.getElementById('weather').innerHTML = template
			//What can you do with this weather object?
		})
	}
}
