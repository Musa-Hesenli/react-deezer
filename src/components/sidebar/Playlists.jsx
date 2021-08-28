import SingerSvg from '../../static/playlist.svg'
import React from 'react';


class MusicMenu extends React.Component {
    render() {
        return (
            <div className='single-menu'>
                <div className='single-menu-title'>
                    Playlists
                </div>
                <div className='music-menu-wrap'>
                    <div className='playlist-menu-item'>
                        <img src={SingerSvg} alt="" />
                        <span>Playlist 1</span>
                    </div>
                    <div className='playlist-menu-item active'>
                    <img src={SingerSvg} alt="" />
                        <span>Summer</span>
                    </div>
                    <div className='playlist-menu-item'>
                        <img src={SingerSvg} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className='playlist-menu-item'>
                        <img src={SingerSvg} alt="" />
                        <span>Movie songs</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default MusicMenu;