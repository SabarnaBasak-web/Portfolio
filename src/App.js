import './App.css';
import CraftomaniaImg from './assets/images/craftomania.JPG';
import EnergysolutionImg from './assets/images/energysolutions.JPG';
import SocietyImg from './assets/images/societyofthesav.JPG';
import PortfolioImg from './assets/images/portfolio.JPG';
import CV from './CV.docx';

//Component Imports
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Work from './Components/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main CV = {CV}/>
      <Work CraftomaniaImg = {CraftomaniaImg} EnergysolutionImg = {EnergysolutionImg} SocietyImg = {SocietyImg} PortfolioImg ={PortfolioImg}/>
      {/* contact */}
      <Footer />
    </div>
  );
}

export default App;
