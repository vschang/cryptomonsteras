// import logo from './logo.svg';
import './App.css';
import './fonts/Monstera-Regular.ttf';
import aroidIcon from './images/aroid.png';
import buyNowIcon from './images/buy_now.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        </p>
        <a href="https://reactjs.org">
          <img src={aroidIcon} className="Aroid-icon" alt='link to aroid market' />
        </a>
        <a href="https://reactjs.org">
          <img src={buyNowIcon} className="Buy-now-icon" alt='link to aroid market' />
        </a>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roadmap
        </a>

      </header>
    </div>
  );
}

export default App;
