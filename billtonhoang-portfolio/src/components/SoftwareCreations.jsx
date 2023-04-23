import * as React from 'react';
import './styling.css/SoftwareCreations.css'
import ColoredLine from './ColoredLine';
import FolderOpenRoundedIcon  from '@mui/icons-material/Folder';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ExternalLinks from './ExternalLinks';

class SoftwareCreations extends React.Component {
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: "1",
          automaticFlipping: true,
          allowFlip: false,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
    }

    changeFlip = () => {
        this.setState({
            automaticFlipping:!this.state.automaticFlipping,
            allowFlip: !this.state.allowFlip
        })
    }
    
    render() {
        const projects  = {
            "GANAesthetic": {
              title: "GANAesthetic",
              desc:"Incorporating human perceptual factor results in improved image outputs from the generative adversarial neural network (GAN).The GANAesthetic provides an interface with UI component known as sliders, where users can interactively explore aesthetically pleasing satellite images with StyleGAN2.",
              techStack: "Python, Gradio, Pytorch",
              link: "https://github.com/HahaBill/ganaesthetic-landshapes",
              open: "https://colab.research.google.com/drive/1uVWNwtAIFZhM3HjV89xyXVAUfwjlQwIt?usp=sharing",
              image: "../assets/ice_age.jpg"
            },
            Binbot: {
              title: "Binbot",
              desc:
                "It is an control pannel app connected to the robot where the user can observe what the robot is doing via the camera (Intel Realsense D435i) in the UI and the current information about its surroundings. User can also save images, videos and post a comment of a particular robot. It also uses real-time detection algorithm to identify items from its surroundings.",
              techStack: "Javascript, ReactJS, Python, ROS2, Socket.io, NodeJS, Pytorch",
              link: "https://github.com/HahaBill/binbot_app",
              open: "",
              image: "../assets/twistlock_bin.jpg"
            },
          };

        return (
            <div id='software-creations'>
                <div className="section-header-software">
                    <span className="section-titlee">/ software-creations</span>
                    <ColoredLine/>
                </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
                <div className="base-card" style={{ 
                    backgroundImage: `url(${projects[key]["image"]})`,  
                    backgroundSize: "cover",
                    borderRadius: "16px",
                    }}>

                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35, color: "black" }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
                </div>   
            ))}
          </ul>
        </div>
            </div>
        );
    }
}

export default SoftwareCreations