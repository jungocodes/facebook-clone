
import React from 'react'
import './Sidebar.css'

import SidebarRow from '../SidebarRow/SidebarRow'
    import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
    import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
    import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import ChatIcon from '@material-ui/icons/Chat';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
            <SidebarRow
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWYEj0z7stl46rUhkCvWopSB1lbIhNGr5Q-g&usqp=CAU"
        title="Thor(god of thander)"
      />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title='Information Center' />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title='pages' />
            <SidebarRow
                Icon={PeopleIcon}
                title='Friends' />
            <SidebarRow
                Icon={ChatIcon}
                title='Messenger' />
            <SidebarRow
                Icon={StorefrontIcon}
                title='Marketplace' />
            <SidebarRow
                Icon={VideoLibraryIcon}
                title='Videos' />
            <SidebarRow
                Icon={ExpandMoreIcon}
                title='Marketplace' />
        </div>
    )
}
 export default Sidebar;