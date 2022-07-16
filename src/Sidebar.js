import React  from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import CategoryIcon from '@material-ui/icons/Category';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import InfoIcon from '@material-ui/icons/Info';


const Sidebar = () => {
  
  
    return (
        
        <div className="sidebar__library" id="sidebar__toggle" >
            <div className="list--sidebar">
            <h1>My List</h1>
            <SidebarRow  Icon={LibraryBooksIcon} title="My Books"  />
            <SidebarRow Icon={CardMembershipIcon} title="My Subscriptions"  />
            <SidebarRow Icon={CategoryIcon} title="My Categories"  />
           <div className="b-bototm"></div> 
            </div>
            
            <div className="list--sidebar">
            <h1>Featured List</h1>
            <SidebarRow Icon={DesktopWindowsIcon} title="Discover"  />
            <SidebarRow Icon={FreeBreakfastIcon} title="Featured Books"  />
            <SidebarRow Icon={FiberNewIcon} title="What's New"  />
            <div className="b-bototm"></div>
            </div>
            
            <div className="list--sidebar">
            <h1>Our Privact List</h1>
            <SidebarRow Icon={InfoIcon} title="More About Us"  />
            <button className="btn-sidebar-privacy">Know More</button>
            <div className="b-bototm"></div>
            </div>
           
        </div>
       
    );
}

export default Sidebar
