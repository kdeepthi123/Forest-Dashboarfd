// WeatherCard.js
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const WeatherCard = ({ feature }) => {
  //const [weatherData, setWeatherData] = useState(null);
  const { latitude, longitude, fire_name, size, initial_imsr_date } = feature.properties;

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=6671cfc89cfa1005843102qane4be2e`);
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
//     };

//     fetchWeatherData();
//   }, [latitude, longitude]);

  const sizeIcon = (size) => {
    if (size < 1000) return '🔥';
    if (size < 5000) return '🔥🔥';
    if (size < 10000) return '🔥🔥🔥';
    return '🔥🔥🔥🔥';
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {fire_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Incident Date: {new Date(initial_imsr_date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Size: {sizeIcon(size)}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default WeatherCard;