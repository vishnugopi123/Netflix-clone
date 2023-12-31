import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { originals,comedy,horror,romance,documentaries } from './url';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={comedy}title="Comedy"isSmall/>
      <RowPost url={horror}title="Horror"isSmall/>
      <RowPost url={romance}title="Romance"isSmall/>
      <RowPost url={documentaries}title="Documentaries"isSmall/>
      
    </div>
  );
}

export default App;
