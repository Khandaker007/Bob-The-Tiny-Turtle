import { useEffect, useState } from 'react';

// COMPONENTS
import { Navbar, Footer, Sidebar } from './components/shared';
import Home from './pages/home/Home';

import './App.scss';

function App() {
  const [ toggle, setToggle ] = useState(false);
    
  const handleToggle = () => {
    setToggle(!toggle);
  };
  

  console.log('Toggle: ', toggle);

  return (
    <div className="app">
      <Navbar handleToggle={handleToggle}/>
      <div className={toggle ? "sidebarContainer open" : "sidebarContainer close"}>
        <Sidebar handleToggle={handleToggle}/>
      </div>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
