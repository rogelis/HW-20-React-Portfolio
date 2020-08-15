import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../rs';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.aboutText}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='rs linkedin'></img> : null}
        </div>  );
    }
}
 
export default About;