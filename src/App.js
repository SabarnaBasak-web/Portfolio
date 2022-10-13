import './App.css';

import CV from './CV.pdf';

//Component Imports
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Work from './Components/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main CV={CV} />
      <Work />
      {/* contact */}
      <Footer />
    </div>
  );
}

export default App;
