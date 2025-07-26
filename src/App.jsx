import Navbar from "./Navbar/Navbar.jsx";
import Library from "./Library/Library.jsx";
import MainSection from "./MainSection/MainSection.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Library />
        <div className="MainSection">
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default App;


