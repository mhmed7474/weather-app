const myForm = document.querySelector('.myForm');
const input = document.querySelector('.myText');
const result = document.querySelector('.result')

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  const apiKey = "aeb3d37910af200a6f45cd794fbd7ef8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let temperature = data.main.temp;
      let city = data.name;
      let weather = data.weather[0].description;
			let icon = data.weather[0].icon;
      result.innerHTML = ` <p class = "location">City: ${city}</p>
			<p class="desc">${weather}</p>
		 <p>Weather:</p> <img class="icon" src="https://openweathermap.org/img/w/${icon}.png">
		 <p class="temp">Temperature: ${temperature}</p>
		 `;
    })
		.catch(error => {
			result.innerHTML = `<p>City Not Found ❌</p>`
		})
		input.value = "";
});