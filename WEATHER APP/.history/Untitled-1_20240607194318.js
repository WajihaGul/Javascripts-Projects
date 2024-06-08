<!DOCTYPE html>
<html>
   <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
                <div class="MainDiv">
                    <div class="SearchDiv" >
                    <input type="search" class="SearchInput" placeholder="Enter city here">
                    <button class="SearchLogo"><img src="/images/search.png" class="btnimg" alt="SearchLogo"></button>
                </div>

                <div class="SecDiv">
                    <div class="weather">
                    <img src="./images/clear.png" alt="weather here" class="weatherImg">
                    </div>
                    <div class="temperature">
                        <h1>22°C</h1>
                    </div>
                    <div class="cityName">
                        <h1>Lahore</h1>
                    </div>
                    <div class="humidityAndWindSpeed">
                    <div class="humidity">
                        <img src="./images/humidity.png" alt="">
                        <h1>53%</h1>

                        <h2>Humidity</h2>
                    </div>
                    <div class="windSpeed">
                        <img src="./images/wind.png" alt="">
                        <h1>5.66 km/h</h1>
                        <h2>Wind Speed</h2>
                    </div>
                    </div>
                </div>
            </div>
            <script>

            const APIkey= "https: api.openweathermap.org/data/2.5/weather?&units=metric";
            const Appid="6348a586aa1ef3c18b76814239e3158a";

        const SearchBar = document.querySelector(".SearchInput");
        const SearchButton = document.querySelector(".SearchLogo ");

        async function checkWeather(city){
        const response= await fetch(`${APIkey}&q=${city}&appid=${Appid}`);
        var data= await response.json();
    console.log(data);
        document.querySelector(".temperature h1").innerHTML=Math.round(data.main.temp) + " °C";
        document.querySelector(".cityName h1").innerHTML=data.name;
        document.querySelector(".windSpeed h1").innerHTML=data.wind.speed + " km/h";
        document.querySelector(".humidity h1").innerHTML=data.main.humidity + " %";

          if(data.main[0]=="Clouds"){
              document.
           }
         SearchButton.addEventListener=("click",()=>{
            checkWeather(SearchBar.value);
            console.log("script added");
        });
    }

            </script>
        </body>
    </html>
