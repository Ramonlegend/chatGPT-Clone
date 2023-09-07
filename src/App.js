import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImageLogo from './assets/chatgptLogo.svg';
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItens">
            <img src={home} alt="Home" className="listitemsImg" />
            Home
          </div>
          <div className="listItens">
            <img src={saved} alt="Saved" className="listitemsImg" />
            Saved
          </div>
          <div className="listItens">
            <img src={rocket} alt="Upgrade" className="listitemsImg" />
            Upgrade to PRO
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />{' '}
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              tenetur porro consectetur vitae repudiandae quidem tempora, totam
              nostrum consequuntur non?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImageLogo} alt="" />{' '}
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              dolore deleniti beatae aperiam eaque est aspernatur, reiciendis in
              blanditiis dolorum repellendus esse laudantium neque distinctio
              pariatur libero rem aliquid doloremque tempore excepturi eos enim
              commodi. Expedita maxime quo dolores voluptatum totam soluta sit
              similique quas molestias accusamus perferendis libero enim non
              ullam incidunt, recusandae minima voluptate? Enim facilis quasi,
              minima porro quo, sapiente magnam quidem molestias quis placeat
              nulla pariatur dolorem ea quibusdam voluptas odit iste fuga, ipsa
              aspernatur maiores? Dicta obcaecati ullam officia, sapiente est
              placeat quasi eligendi facere esse, vero blanditiis deserunt ipsum
              eius atque, aperiam laboriosam. Ab?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />{' '}
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places or
            facts. ChatGPT Clone September 23 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
