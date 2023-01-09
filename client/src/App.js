// import logo from './logo.svg';
import './App.css';
import './normal.css';
import { FaPlus } from 'react-icons/fa';
// import { FaPlus } from 'react-icons/fa';

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
        <h1 className="interface-heading">AI Chat Interface</h1>
        <div className="chat-input-holder">
          <div>
          <textarea
            rows="1"
            className="chat-input-textarea"
          >
          </textarea>
          </div>
          

        </div>
      </section>
      
    </div>
  );
}

export default App;
