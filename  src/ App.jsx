import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log("✅ App component mounted!");
  }, []);

  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#00ffcc',
      padding: '3rem',
      minHeight: '100vh',
      fontSize: '2rem',
      textAlign: 'center'
    }}>
      ✅ Hello from the 15-Year Business Dashboard!
    </div>
  );
};

export default App;


