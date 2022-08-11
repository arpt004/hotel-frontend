import './App.css';
import HeaderFile from './components/header/headerFile';
import Sidebar from './components/sidebar/sidebar';
import FooterFile from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Welcome to Trilok Bhawan
          <HeaderFile />
          <Sidebar />
          <FooterFile />
      </header>
    </div>
  );
}

export default App;
