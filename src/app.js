import './styles.css'

async function getData(city) {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'${city}'?unitGroup=metric&key=WR73STJT6RY7U9ZZ8D5VQBVGV&contentType=json`
	try {
		const response = await fetch(url)
		if (!response.ok) {
			alert('Please provide a valid location')
			return
		}

		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.error(error.message)
		throw error
	}
}

function updateUI(data) {
	const location = document.querySelector('#location')
	const time = document.querySelector('#time')
	const conditions = document.querySelector('#conditions')
	const temp = document.querySelector('#temp')
	const feelsLike = document.querySelector('#feels-like')
	const description = document.querySelector('#description')

	location.innerHTML = `Location: ${data.resolvedAddress}`
	time.innerHTML = `Time: ${data.currentConditions.datetime}`
	conditions.innerHTML = `Current Conditions: ${data.currentConditions.conditions}`
	temp.innerHTML = `Current Temperature: ${data.currentConditions.temp}`
	feelsLike.innerHTML = `Feels Like: ${data.currentConditions.feelslike}`
	description.innerHTML = data.description
}

async function handleSearch() {
	try {
		const city = document.querySelector('#city').value
		const data = await getData(city)
		updateUI(data)
	} catch (error) {
		console.error('Error in handleSearch: ', error)
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const cityInput = document.querySelector('#city')
	const submitElement = document.querySelector('#submit')
	submitElement.addEventListener('click', () => {
		handleSearch()
		cityInput.value = ''
	})
})
