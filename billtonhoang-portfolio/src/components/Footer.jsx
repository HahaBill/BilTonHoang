import React, { useEffect, useRef } from "react";
import "./styling.css/Footer.css";

function Footer() {
<<<<<<< HEAD
=======

  // const vidRef=useRef();
  // useEffect(() => { vidRef.current.play(); },[]);

>>>>>>> re-design
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