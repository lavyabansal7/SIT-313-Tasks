import React from 'react';

function JumboImage() {
  return (
    <div
      style={{
        backgroundImage: "url('https://picsum.photos/id/23/2000/1000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'white'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds opacity to the background
        }}
      />
      <h3 style={{ position: 'relative', zIndex: 1 }}>Welcome to Dev @ Deakin</h3>
    </div>
  );
}

export default JumboImage;