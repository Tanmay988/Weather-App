const submitbtn = document.getElementById("submitbtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const cityTemp = document.getElementById("cityTemp");
const tempMood = document.getElementById("tempMood");
const date = document.getElementById("date");
const day = document.getElementById("day");
let city = "";

const getInput = () => {
  city = cityInput.value;
};

const getInfo = async (e) => {
  e.preventDefault();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2a589979403673ec7d381e4dd4735be&units=metric`;

  if (cityInput.value === "") {
    cityName.innerText = "plz enter a city";
  } else {
    try {
      const data = await fetch(url);
      const orgData = await data.json();
      const arrData = [orgData];
      cityName.innerText = `${city},${arrData[0].sys.country}`;
      cityTemp.innerText = arrData[0].main.temp + " °C";
      const status = arrData[0].weather[0].main;
      if (status === "clouds") {
        tempMood.innerHTML = " <i class='fa - solid fa - cloud'></i>";
      } else if (status === "sunny") {
        tempMood.innerHTML = "<i class='fa - solid fa - sunny'></i>";
      } else if (status === "rain") {
        tempMood.innerHTML = "<i class='fa - solid fa - cloud-rain'></i>";
      } else {
        tempMood.innerHTML = "<i class='fa-solid fa-cloud-sun'></i>";
      }

      date.textContent = new Date().toLocaleDateString("en-us", {
        day: "numeric",
        month: "short",
      });
      day.textContent = new Date().toLocaleDateString("en-us", {
        weekday: "long",
      });
      city.value = "";
    } catch {
      console.log("error:url not fetch");
    }
  }
};

submitbtn.addEventListener("click", getInfo);
cityInput.addEventListener("change", getInput);
