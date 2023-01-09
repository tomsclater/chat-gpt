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
        <div class="parent">
          <div class="div1"> 1</div>
          <div class="div2"> 2</div>
          <div class="div3"> 3</div>
          <div class="div4"> 4</div>
          <div class="div5"> 5</div>
          <div class="div6"> 6</div>
          <div class="div7"> 7</div>
          <div class="div8"> 8</div>
          <div class="div9"> 9</div>
          <div class="div10"> 10</div>
          <div class="div11"> 11</div>
          <div class="div12"> 12</div>
        </div>
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
