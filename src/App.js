import './App.css';
import HeaderFile from './components/header/headerFile';
import FooterFile from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Welcome to Trilok Bhawan
          <HeaderFile />
          <FooterFile />
      </header>
    </div>
  );
}

export default App;
