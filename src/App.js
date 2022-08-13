import './App.css';
import HeaderFile from './components/header/headerFile';
import Sidebar from './components/sidebar/sidebar';
import FooterFile from './components/footer/footer';
import MainBody from './components/mainBody/mainBody'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HeaderFile />
          <div className='container-div'>
            <Sidebar />
            <MainBody />
          </div>          
          <FooterFile />
      </header>
    </div>
  );
}

export default App;
