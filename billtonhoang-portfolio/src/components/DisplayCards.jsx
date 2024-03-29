import * as React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import './styling.css/SoftwareCreations.css'
import SwitchForCards from './SwitchForCards'

function DisplayCards() {

    return (
        <div>
              <SwitchForCards allowAutomaticFlip={this.changeFlip}></SwitchForCards>
                <Box className='software-box' sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <Flippy
                                flipOnHover={this.state.automaticFlipping} // default false
                                flipOnClick={this.state.allowFlip} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
                            >
                                <FrontSide
                                style={{
                                    backgroundColor: '#41669d',
                                }}
                                >
                                
                                </FrontSide>
                                <BackSide
                                style={{ backgroundColor: '#175852'}}>
                                </BackSide>
                            </Flippy>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
        </div>
    );
}

export default DisplayCards;