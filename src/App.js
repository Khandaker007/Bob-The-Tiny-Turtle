// COMPONENTS
import { Navbar, Footer } from './components/shared';
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
