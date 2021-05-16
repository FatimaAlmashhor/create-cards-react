import './App.css';
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation/Navigation';
import LeftBar from './components/LeftBar/LeftBar';
import Frame from './components/Frame/Frame';
import html2canvas from 'html2canvas';

import FrameProvider from './frameContext';
function App() {
  const [showSider, setshowSider] = useState('show');
  const handleToggleButton = () => {
    if (showSider === '') {
      setshowSider('show')
    }
    else
      setshowSider('');
  }
  const downloadimage = () => {
    //var container = document.getElementById("image-wrap"); //specific element on page
    var container = document.getElementById("card");
    html2canvas(container, { allowTaint: false, useCORS: true }).then(function (canvas) {

      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "card.png";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
    });
  }
  return (
    <FrameProvider>
      <div className="App">
        <Navigation onClickMenu={handleToggleButton} onClickDownload={downloadimage} />
        <div className='flex'>
          <div className={`w-small ${showSider}`}>
            <LeftBar onClickDownload={downloadimage} />
          </div>
          <div className='frame-position'>
            <Frame />
          </div>
        </div>
      </div>
    </FrameProvider>
  );
}

export default App;
