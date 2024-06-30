import React from 'react';

const FirePopup = ({ feature }) => {
  return (
    <div style={{ padding: '10px', maxWidth: '300px' }}>
      <h2 style={{ marginBottom: '10px' }}>{feature.properties.fire_name}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>Incident ID:</span>
        <span>{feature.properties.incident_id}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>Size:</span>
        <span>{feature.properties.size} Acres</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>Discovery Date:</span>
        <span>{feature.properties.IrwinFireDiscoveryDateTime}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>Occurrence:</span>
        <span>{feature.properties.Occurrence}</span>
      </div>
    </div>
  );
};

export default FirePopup;