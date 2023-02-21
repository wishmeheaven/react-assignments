import React from "react";
import Wrapper from './styles/styled/VideoDemo.styled'
import WrapperBox from './styles/styled/VideoDemo.styled'
import { useRef, useState } from "react";


export default function VideoDemo(props) {

    const videoRef = useRef(null)

    const [playOrPause, setPlayOrPause] = useState(true)

    const playModeBtn = document.querySelector("#playMode")

    const [mode] = useRef(WrapperBox)

    const playVideo = () => {

        console.log("videoRef", videoRef);

        videoRef.current.style.boxShadow('0px 0px 8px 3px #yellow');
        setPlayOrPause(prev => !prev)
        if (playOrPause) {
            videoRef.current.play()
            playModeBtn.innerText = "Pause"
        } else {
            videoRef.current.pause()
            playModeBtn.innerText = "Play"
        }
    };

    const stopVideo = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        playModeBtn.innerText = "Play"
        setPlayOrPause(true)
    };
    return (
        <Wrapper>

            <WrapperBox className={boxMode}>
                <video
                    type="video/mp4"
                    ref={videoRef}
                    src={props.url}
                /></WrapperBox>

            <div class="buttons-container">
                <button id="playMode" onClick={playVideo}>
                    Play
                </button>
                <button onClick={stopVideo}>
                    Stop
                </button>
            </div>
        </Wrapper>
    )
}