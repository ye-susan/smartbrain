import React from 'react';
import Tilt from 'react-tilt';
import face from './facerecog.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br3 shadow-3" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '5px'}} alt='logo' src={face} />
                </div>
            </Tilt>
        </div>
    )
} 

// attribute
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default Logo;