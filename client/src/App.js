// import logo from './logo.svg';
import './App.css';
import './normal.css';
import { FaPlus } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
        <FaPlus className="plus-button"/>
        New chat  
        </div>
      </aside>
      <section className="chatbox">
      
      </section>
      
    </div>
  );
}

export default App;
