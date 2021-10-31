import './App.css';
import './components/Header.css';
import Header from './components/Header.js';
import './components/Nadpis.css'
import Nadpis from './components/Nadpis.js';
import './components/Picture.css';
import Picture from './components/Picture.js';
import './components/Footer.css';
import Footer from './components/Footer.js';




function App() {
  return(
    <div className="App">
      <Header />
      <Nadpis />  
    <div className="Nadpis">
      
    <div className="Picture">
        <Picture />
        <Picture />
        </div>
        <div className="Picture">
        <Picture />
        <Picture />
        </div>
        <div className="Picture">
        <Picture />
        <Picture />
        </div>
        <Footer />
  </div>
</div>
  )
}

export default App;
