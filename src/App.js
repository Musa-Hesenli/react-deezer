import Content from "./components/Content"
import Sidebar from "./components/sidebar/Sidebar"
import "./static/css/media-player.css";
import './static/css/bootstrap.min.css';
import './static/css/custom.css';


function App() {
  return (
    <div className="App">
      <div className='app-content'>
        <Sidebar/>
        <Content/>
      </div>
      <div className='media-part'>
        <audio data-role="audio-player" data-src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3" className="light"></audio>
      </div>
    </div>
  );
}

export default App;
