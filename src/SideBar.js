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
import SecurityIcon from '@material-ui/icons/Security';
import { useStateValue } from './StateProvider';
import GroupWorkSharpIcon from '@material-ui/icons/GroupWorkSharp';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import CloudIcon from '@material-ui/icons/Cloud';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
function SideBar() {
    const [{ user }, dispath] = useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow
                src={user.photoURL}
                title={user.displayName} />
            <SideBarRow Icon={SecurityIcon} title="COVID-19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={BusinessCenterSharpIcon} title="Jobs" />
            <SideBarRow Icon={GroupWorkSharpIcon} title="Films" />
            <SideBarRow Icon={CloudIcon} title="Weather" />
            <SideBarRow Icon={LocalOfferIcon} title="Offers" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="See more" />
        </div>
    )
}

export default SideBar
