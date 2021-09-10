import React, {useState} from 'react'
import Axios from 'axios'
import styled from 'styled-components';
import WeatherComponent from './Components/WeatherComponent';
import CityComponet from './Components/CityComponet';
import sunny from './icons/sunny.svg';
import day from './icons/day.svg'
import night from './icons/night.svg'
import cloudyNight from './icons/cloudy-night.svg'
import cloudy from './icons/cloudy.svg'
import perfectDay from './icons/perfect-day.svg'
import rain from './icons/rain.svg'
import rainNight from './icons/rain-night.svg'
import storm from './icons/storm.svg'
import humidity from './icons/humidity.svg'


export const WeatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudyNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectDay,
  "04n": cloudyNight,
  "09d": rain,
  "09n": rainNight,
  "10d": rain,
  "10n": rainNight,
  "11d": storm,
  "11n": humidity,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`
const AppLabel = styled.span`
color: black;
margin: 20px auto;
font-size: 18px;
font-weight: bold;
`;




function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) =>{
    e.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe323465105e85fffefeb9ac567a409b`);
    updateWeather(response.data);

  }


  return (
    <Container>
         <AppLabel>Weather App</AppLabel>
          {
            city && weather ?
            (<WeatherComponent weather={weather} city={city}/>):
            (
              <CityComponet updateCity={updateCity} fetchWeather={fetchWeather}/>
            )
          }
    </Container>
  );
}

export default App;
