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
            duration: "September 2022 - present",
            description: [
                "Technologies : Mendix, HTML, CSS, Javascript, ReactJS, Jira, Azure cloud, Miro"
            ]
        },
        "Birds.ai": {
            jobTitle: "Junior Python Developer",
            location: "Hague",
            duration: "March 2022 - September 2022",
            description: [
                "The task is to detect the surgeon's faces and blur them due to privacy concerns and make use of AI to know when the procedures starts by the gestures from the surgeon. Creating UI for the customer to operate in and observe detected features.",
                "Technologies : Python, Detectron2, Docker, MLOps, Pytorch, Tensorflow, scikit-learn, V7Darwin, matplotlib, GitLab"
            ]

        },
        Siemens: {
            jobTitle: "Software and Robotics engineer",
            location: "Hague/Delft",
            duration: "",
            description: [
                "Technologies : Python, HTML, CSS, Javascript, ReactJS, yarn, TailwindCSS, ROS, Pytorch, Darknet, OpenCV"
            ]
        }
    }


  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <div id="experience-list">
      <Box
        sx={{ flexGrow: 1, display: 'flex', height: 200, width: 900, position:'relative', top:'-500px'}}
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
              <div className=''>
                <ul className="job-description">
                  <FadeIn>
                    {experienceList[key]["description"].map(function (descItem, i) {
                        return (
                            <li key={i}>{descItem}</li>
                        );
                    })}
                </FadeIn>
                </ul>
              </div>
          </TabPanel>
          ))}
      </Box>
    </div>
  );
}