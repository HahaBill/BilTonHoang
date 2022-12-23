import React from "react";
import "./styling.css/Introduction.css"
import Typist from "react-typist";
import EmailIcon from '@mui/icons-material/Email';
import BillModel from "./BillModel"
import FadeIn from 'react-fade-in';

class Intro extends React.Component {

  render() {
    return (
    <div>
        <div id="intro">
            <Typist avgTypingDelay={200}>
            <span className="intro-title">
                {"Hi, "}
                <span className="intro-name">{"Ton Hoang"}</span>
                {" here."}
            </span>
            </Typist>
            <FadeIn delay={1200}>
                <div className="intro-subtitle">You can also call me Bill.</div>
                <div className="intro-desc">
                    I'm a software engineer and roboticist based in the Netherlands. I have great
                    interest in artificial intelligence, web 3.0, full-stack development,
                    robotics, and everything in between.
                </div>
            </FadeIn>
            <a
                href="mailto:bill.nguyentonhoang@live.com"
                className="intro-contact"
            >
                <div className="contact">
                    <EmailIcon></EmailIcon>
                    {"   " + "Say hi!"}
                </div>
            </a>
        </div>
        <div className="billmodel">
            <BillModel></BillModel>
        </div>
      </div>
      
    );
  }
}

export default Intro;