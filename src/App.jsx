import React, { useState } from 'react';
import Header from './components/Header';
import Image from './components/Image';

function App() {
  const [isGridMode, setIsGridMode] = useState(false);

  const toggleGridMode = () => {
    setIsGridMode(!isGridMode);
  };

  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <Header toggleGridMode={toggleGridMode} />
      <Image isGridMode={isGridMode} />
    </div>
  );
}

export default App;
