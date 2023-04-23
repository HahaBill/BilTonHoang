import React from "react";
import "./styling.css/About.css"
import FadeIn from 'react-fade-in';
import BillCarousel from './BillCarousel'
import ColoredLine from "./ColoredLine";

class About extends React.Component {
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
    const one = (
      <p>
        I have obtained my bachelor's degree in <b>Computer Science and Engineering</b> at
        <a href="https://www.tudelft.nl">
          {" "}
          Delft University of Technology
        </a>
        . After graduation, I am working at {" "}
        <a href="https://www.mendix.com">Mendix</a> as a{" "}
        <b>Software Developer Trainee</b> while working on my robotic startup <b>Qafka</b> with friends,
        my role in the team is being <b>Software and Robotics Engineer</b>.
      </p>
    );
    const two = (
      <p>
        Outside of work and studies, I'm interested art and science. Currently, I am making
        copies of works by Italian Renaissance painters to learn the technical skills. I consider
        myself as a bookworm, I get to know different worlds and ideas by many human minds.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS",
      "ROS",
      "Pytorch",
      "Gradio",
      "Next.js",
      "MongoDB",
      "GraphQL"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeIn>
          <div className="section-header-about">
            <span className="section-title">/ about</span>
<<<<<<< HEAD
=======
            <ColoredLine color='white'/>
>>>>>>> re-design
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeIn delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeIn>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="carousel">
                <BillCarousel></BillCarousel>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default About;