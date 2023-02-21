
import './App.css';
import React from "react";
import VideoDemo from './VideoDemo';

function App() {
  return (
    <div>
      <VideoDemo 
        url="https://vod-progressive.akamaized.net/exp=1676853531~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3482%2F14%2F367411324%2F1518478278.mp4~hmac=a2e41c866d99698a698bfd6200ae710372af064d0bad9b498ea0a7c48460fae7/vimeo-prod-skyfire-std-us/01/3482/14/367411324/1518478278.mp4"
      />
    </div>
  );
}

export default App;
