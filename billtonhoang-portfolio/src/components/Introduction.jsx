import React from "react";
import "./styling.css/Introduction.css"
import Typist from "react-typist";
import EmailIcon from '@mui/icons-material/Email';
import BillModel from "./BillModel"
import FadeIn from 'react-fade-in';
import "react-typist/dist/Typist.css";
// import billintropic from '../assets/photos_intro/bill_circle_camera.jpg'
import billintropic from '../assets/photos_intro/bill_artsy.jpg'

class Intro extends React.Component {
    
    constructor() {
        super();
    this.state = {
        expanded: true,
        activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
        activeKey: eventKey
        });
    }
  render() {
    const bill_intro_pic = {width: '500px', height: '350px'};

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
                    I'm a software engineer based in the London. I have great
                    interest in artificial intelligence, web 3.0, full-stack development,
                    robotics, and everything in between.
                    <div className="intro-image">
                        <img style={bill_intro_pic} src={billintropic}></img>
                    </div>   
                </div>
                <a
                    href="mailto:bill.nguyentonhoang@live.com"
                    className="intro-contact"
                 >
                    <div className="contact">
                        <EmailIcon></EmailIcon>
                        {"   " + "Say hi!"}
                    </div>
                </a>   
            </FadeIn>
        </div>
        {/* <div className="billmodel">
            <BillModel></BillModel>
        </div> */}
      </div>
      
    );
  }
}

export default Intro;