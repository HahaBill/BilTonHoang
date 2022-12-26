import React from "react";
import "./styling.css/Experience.css";
import ExperienceList from "./ExperienceList";

class Experience extends React.Component {
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
    return (
      <div id="experience">
          <div className="section-header-experience">
            <span className="section-title">/ experience</span>
          </div>
          <ExperienceList></ExperienceList>
      </div>
    );
  }
}

export default Experience;