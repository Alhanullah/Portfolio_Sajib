import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Projectss from './components/projectss/Projectss';

function App() {
  return (
    <div className="App">
        <Navbar className="fixed" />
        <About />

      <div className='bg-black'>
        <Projectss />
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
