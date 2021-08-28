import React from 'react';
import MusicMenu from './MusicMenu';
import PlayLists from './Playlists'

class Sidebar extends React.Component {
    render() {
        return (
            <div className='left-sidebar'>
                <div className='logo'>
                    <h4>MusCloud</h4>
                </div>
                <MusicMenu/>
                <PlayLists/>
            </div>
        )
    }
};

export default Sidebar;