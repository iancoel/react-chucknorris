import React from 'react';
import Header from './Header.js';
import Categories from './Categories.js';

const App = () => {
  const bg = {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(145.37deg, #133488 36.16%, #E9902E 89.04%)',
  };

  const headerStyle = {
    margin: '0 auto',
  };

  return (
    <div style={bg}>
      <Header style={headerStyle} />
      <Categories />
    </div>
  );
};

export default App;
