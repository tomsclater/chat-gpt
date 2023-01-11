// import logo from './logo.svg';
import './App.css';
import './normal.css';
import { FaPlus } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { CiWarning } from 'react-icons/ci';
import { useState } from 'react';

function App() {

  // add state for input and chat log
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "How can I help you?"
  },{
    user: "me",
    message: "Are you working?"
  }]);

  async function handleSubmit(e){
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}`} ])
    setInput("");

  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
        <FaPlus className="plus-button"/>
        New chat  
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
              <ChatMessage key={index} message={message} />
          ))}

{/* DUMMY COMMENT NUMBER 2 */}

          {/* <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 256 256"
                >
                  <path fill="none" d="M0 0h256v256H0z"/>
                  <path
                    d="M32 216s32-56 32-120a64 64 0 0 1 128 0c0 64 32 120 32 120"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                  />
                  <circle cx={100} cy={108} r={12}  fill="#fff"/>
                  <circle cx={156} cy={108} r={12} fill="#fff"/>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                    d="m160 144-32 16-32-16M86.4 216a48.1 48.1 0 0 1 83.2 0"
                  />
                </svg>
              </div>
              <div className="message">
                I am an AI
              </div>
            </div>
          </div> */}

{/* DUMMY COMMENT NUMBER 2 */}


        </div>
        <h1 className="interface-heading">AI Chat Interface</h1>
        <div class="parent">
          <div class="div1"> <BsSun/><br/>Examples</div>
          <div class="div2"> <AiOutlineThunderbolt/><br/>Capabilities</div>
          <div class="div3"> <CiWarning/><br/>Limitations</div>
          <div class="div4"> "Explain quantum computing in simple terms"</div>
          <div class="div5"> Remembers what user said earlier in the conversation</div>
          <div class="div6"> May occasionally generate incorrect information</div>
          <div class="div7"> "Got any creative ideas for a 10 year old's birthday?"</div>
          <div class="div8"> Allows user to provide follow-up corrections</div>
          <div class="div9"> May occasionally produce harmful instructions or biased content</div>
          <div class="div10"> "How do I make an HTTP request in JavaScript?"</div>
          <div class="div11"> Trained to decline inappropriate requests</div>
          <div class="div12"> Limited knowledge of world and events after 2021</div>
        </div>
        <div className="chat-input-holder">
          <div>
            <form onSubmit={handleSubmit}>
          <input
            rows="1"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className="chat-input-textarea"
          >
          </input>
          </form>
          </div>
          

        </div>
      </section>
      
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
            <div className="chat-message-center">
              <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
                {message.user === "gpt" && <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 256 256"
                >
                  <path fill="none" d="M0 0h256v256H0z" />
                  <circle
                    cx={128}
                    cy={128}
                    r={96}
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                  />
                  <circle cx={92} cy={108} r={12} />
                  <circle cx={164} cy={108} r={12} />
                  <path
                    d="M169.6 152a48.1 48.1 0 0 1-83.2 0"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                  />
                </svg>}
                
              </div>
              <div className="message">
                {message.message}
              </div>
            </div>
          </div>
  )
}

export default App;
