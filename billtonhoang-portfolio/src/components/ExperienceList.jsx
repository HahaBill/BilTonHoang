import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./styling.css/ExperienceList.css"
import FadeIn from 'react-fade-in';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, pl: 10 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const experienceList = {
        Mendix: {
            jobTitle: "Software developer trainee",
            location: "Rotterdam",
            duration: "September 2022 - June 2023",
            description: [
                "Contributed and involved in the design and development of an audit management application used by internal and external auditors.",
                "Designed and implemented an API for managing automatic synchronization between Salesforce and Zuora. Worked closely with the solution architect and application engineer.",
                "Improved implementations in existing external applications.",
                "Technologies and tools: Mendix, PostgresSQL, Jira, Confluence, HTML, CSS, Javascript, Java, Miro, LucidChart. Azure"
            ]
        },
        "Birds.ai": {
            jobTitle: "Junior Python Developer",
            location: "Hague",
            duration: "March 2022 - September 2022",
            description: [
                "Designed and implemented an anonymization algorithm for surgeon's faces using Detectron2 to train Fast-RCNN with pixelated blurring.",
                "Researched and processed several datasets containing faces and face masks.",
                "Creating UI for the customer to operate in and observe detected features and made a demo for CrescentMed.",
                "Technologies and tools : Pytorch, Jupyter Notebook, Python, Docker, V7 Darwin, Websocket, matplotlib and MLFlow"
            ]

        },
        Siemens: {
            jobTitle: "Software and Robotics engineer",
            location: "Hague/Delft",
            duration: "August 2021 - February 2022",
            description: [
                "The project was about designing and creating an automatic robot that removes and installs twist-locks to the container.",
                "Working with other 5 engineers from a different backgrounds other than Computer science to solve this issue and finish the project in order to have a working prototype that will have real-life use. The duration of this project is 6 months and working in RoboHouse situated in TUDelft. Weekly scrum meeting with Siemens's sales team manager and engineers. (https://robohouse.nl)",
                "Implemented and designed ROS architecture, furthermore, I was working on an object detection model with motion tracking using mecanum wheels (wheels that move in any XY direction) with Kalman filter and YOLO. Created a user interface that allows operators to control the robot, see its current state and navigate to a certain area. Used ReactJS with TailwindCSS.",
                "In this project, I used several tools and technologies such as ROS, Pytorch, OpenCV, Darknet, Gazebo, yarn, React.js and TailwindCSS"
            ]
        }
    }


  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <div id="experience-list">
      <Box
        sx={{ flexGrow: 1, display: 'flex', position: 'relative', height: 800, width: 900}}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {Object.keys(experienceList).map((key, i) => (
              <Tab label={key} {...a11yProps(i)} />
          ))}
        </Tabs>
        {Object.keys(experienceList).map((key, i) => (
          <TabPanel value={value} index={i}>
            <div className='tabpanel-component'>
                <span className="joblist-job-title">
                {experienceList[key]["jobTitle"] + " "}
                <span className="joblist-job-company">
                  <AlternateEmailIcon></AlternateEmailIcon>
                  {key}
                </span>
                </span>
                <div className="joblist-duration">
                {experienceList[key]["duration"]}
                </div>
              </div>
              <ul className="job-description">
                <FadeIn>
                  {experienceList[key]["description"].map(function (descItem, i) {
                      return (
                        <li key={i}>{descItem}</li>
                      );
                  })}
              </FadeIn>
              </ul>
          </TabPanel>
          ))}
      </Box>
    </div>
  );
}