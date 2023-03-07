// COMPONENTS
import { Navbar, Footer } from './components';
import Home from './pages/home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
