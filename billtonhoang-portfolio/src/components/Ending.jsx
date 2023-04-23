import React, { useEffect, useRef } from "react";
import "./styling.css/Ending.css";

import sample from '../assets/bill_rainy_video.mp4';

function Footer() {

  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);

    return (
        <div id="footer">
          <video className='videoTag' ref={vidRef} autoPlay loop muted>
            <source src={sample} type='video/mp4' />
          </video>  

        </div>
    );
}

export default Footer;