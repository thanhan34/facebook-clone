import React from 'react'
import SideBarRow from './SideBarRow';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

function SideBar() {
    return (
        <div className="sidebar">
            {/*<SideBarRow src={user.photoURL} title={user.displayName} />*/}
            <SideBarRow
                src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/18010299_10208936516318923_5362734103242126122_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=joqO5Nnkm1QAX_Truvl&_nc_ht=scontent.fbne6-1.fna&oh=f092509927616a587e6aa6f3f82a142a&oe=5F94A11A"
                title="An Doan" />
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
