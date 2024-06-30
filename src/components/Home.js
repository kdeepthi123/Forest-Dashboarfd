import React, { useState,useEffect } from 'react';
import WeatherCard from './WeatherCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Home = ({ data }) => {
  const [sortedFeatures, setSortedFeatures] = useState(data.features);
  const [sortCriteria, setSortCriteria] = useState('date');

  // Sort features based on the selected criteria
  const sortFeatures = () => {
    const sorted = [...data.features].sort((a, b) => {
      switch (sortCriteria) {
        case 'date':
          return a.properties.IrwinFireDiscoveryDateTime.localeCompare(b.properties.IrwinFireDiscoveryDateTime);
        case 'size':
          return a.properties.size - b.properties.size;
        case 'name':
          return a.properties.fire_name.localeCompare(b.properties.fire_name);
        default:
            return a.properties.IrwinFireDiscoveryDateTime.localeCompare(b.properties.IrwinFireDiscoveryDateTime);
       
      }
    });
    setSortedFeatures(sorted);
  };

  // Handle change in sort criteria
  const handleSortChange = (event, newValue) => {
    setSortCriteria(newValue);
    const sorted = [...data.features].sort((a, b) => {
      switch (newValue) { // Use newValue instead of sortCriteria
        case 'date':
          return a.properties.initial_imsr_date.localeCompare(b.properties.initial_imsr_date);
        case 'size':
          return a.properties.size - b.properties.size;
        case 'name':
          return a.properties.fire_name.localeCompare(b.properties.fire_name);
        default:
          return 0;
      }
    });
    setSortedFeatures(sorted);
  };
  return (
    <Container style={{ marginTop: '20px' }}>
      <Tabs
        value={sortCriteria}
        onChange={handleSortChange}
        aria-label="Sort criteria tabs"
        variant="fullWidth"
      >
        <Tab label="Sort by Date" value="date" />  
        <Tab label="Sort by Size" value="size" />
        <Tab label="Sort by Name" value="name" />
      </Tabs>
     
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {sortedFeatures.map((feature) => (
          <Grid item xs={12} sm={6} md={4} key={feature.id}>
            <WeatherCard feature={feature} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

// import React, { useState, useEffect } from 'react';
// import WeatherCard from './WeatherCard';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';

// const Home = ({ data }) => {
//   const [timezones, setTimezones] = useState([]);
//   const [selectedTimezones, setSelectedTimezones] = useState([]);
//   const [filteredData, setFilteredData] = useState(data.features);

//   useEffect(() => {
//     const fetchTimezones = async () => {
//       const uniqueTimezones = new Set();
//       for (const feature of data.features) {
//         const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${feature.geometry.coordinates[1]},${feature.geometry.coordinates[0]}?key=Y6AX7QDWEJRSFEJYSU8E4EVBT`);
//         const weatherData = await response.json();
//         uniqueTimezones.add(weatherData.timezone);
//       }
//       setTimezones([...uniqueTimezones].sort());
//     };

//     fetchTimezones();
//   }, [data]);

//   const handleCheckboxChange = (timezone) => {
//     if (selectedTimezones.includes(timezone)) {
//       setSelectedTimezones(selectedTimezones.filter(tz => tz !== timezone));
//     } else {
//       setSelectedTimezones([...selectedTimezones, timezone]);
//     }
//   };

//   useEffect(() => {
//     setFilteredData(data.features.filter(feature => selectedTimezones.includes(feature.timezone)));
//   }, [selectedTimezones, data]);

//   return (
//     <Container style={{ marginTop: '20px' }}>
//       <div>
//         {timezones.map(timezone => (
//           <FormControlLabel
//             key={timezone}
//             control={<Checkbox checked={selectedTimezones.includes(timezone)} onChange={() => handleCheckboxChange(timezone)} />}
//             label={timezone}
//           />
//         ))}
//       </div>
//       <Grid container spacing={3}>
//         {filteredData.map((feature) => (
//           <Grid item xs={12} sm={6} md={4} key={feature.id}>
//             <WeatherCard feature={feature} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Home;