import React from 'react'
import SideBarRow from './SideBarRow';
import './SideBar.css';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { useStateValue } from './StateProvider';
function SideBar() {
    const [{ user }, dispath] = useStateValue();
    return (
        <div className="sidebar">
            {/*<SideBarRow src={user.photoURL} title={user.displayName} />*/}
            <SideBarRow
                src={user.photoURL}
                title={user.displayName} />
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="See more" />

        </div>
    )
}

export default SideBar
