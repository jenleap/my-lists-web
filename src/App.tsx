import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { AppRoutes } from './components/app-routes.component';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    
  );
}

export default App;
