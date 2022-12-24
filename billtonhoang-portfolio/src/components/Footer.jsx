import React from "react";
import "./styling.css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
        <div id="footer">
          <div className="ending-credits">
            <div>Built and designed by Ton Hoang Nguyen (Bill). </div>
            <div>Inspired by Gazi Jarin</div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
    );
  }
}

export default Footer;