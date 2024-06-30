import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MapScreen from './components/MapScreen';
// from https://data-nifc.opendata.arcgis.com/datasets/
import data from './data/geojson.json';
import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { Home as HomeIcon, Map as MapIcon, Public as GlobeIcon  } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>
      
      <AppBar position="static">
      
      <Tabs
        value={false}
        indicatorColor="primary"
        textColor="inherit"
        aria-label="Header tabs"
        orientation="horizontal"
      >
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <GlobeIcon sx={{ marginLeft: '18px', fontSize: "40px" }} />
        WildfireTracker from National Interagency Fire Center
      </Typography>
        <Tab
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <Tab
          label="Map"
          icon={<MapIcon />}
          component={Link}
          to="/map"
        />
      </Tabs>
    </AppBar>
   

        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/map" element={<MapScreen data={data} />} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;