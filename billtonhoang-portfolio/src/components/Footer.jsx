import React, { useEffect, useRef } from "react";
import "./styling.css/Footer.css";

import sample from '../assets/bill_rainy_video.mp4';

function Footer() {

  // const vidRef=useRef();
  // useEffect(() => { vidRef.current.play(); },[]);

    return (
        <div id="footer">
          {/* <video className='videoTag' ref={vidRef} autoPlay loop muted>
            <source src={sample} type='video/mp4' />
          </video>   */}
          <div className="ending-credits">
            <div>Built and designed by Ton Hoang Nguyen (Bill). </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
    );
}

export default Footer;