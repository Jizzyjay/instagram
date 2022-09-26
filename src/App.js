import './App.css';
import { Bio, Nav, Gallery } from './Components';

function App() {
  return (
    <>
      <Nav />
      <div className="container">
      <Bio />
      <Gallery />
    </div>
    </>
    
  );
}

export default App;
