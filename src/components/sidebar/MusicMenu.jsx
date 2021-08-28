import { faHeadphones, faHeart, faHome, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingerSvg from '../../static/singer.svg'
import React from 'react';


class MusicMenu extends React.Component {
    render() {
        return (
            <div className='single-menu'>
                <div className='single-menu-title'>
                    Music
                </div>
                <div className='music-menu-wrap'>
                    <div className='music-menu-item'>
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Home</span>
                    </div>
                    <div className='music-menu-item active'>
                        <FontAwesomeIcon icon={faHeadphones}/>
                        <span>Songs</span>
                    </div>
                    <div className='music-menu-item'>
                        <FontAwesomeIcon icon={faRecordVinyl}/>
                        <span>Albums</span>
                    </div>
                    <div className='music-menu-item'>
                        <img src={SingerSvg} alt=""/>
                        <span>Artists</span>
                    </div>
                    <div className='music-menu-item'>
                        <FontAwesomeIcon icon={faHeart}/>
                        <span>Liked</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default MusicMenu;