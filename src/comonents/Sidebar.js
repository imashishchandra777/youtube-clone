import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import LibraryAddSharpIcon from '@mui/icons-material/LibraryAddSharp';
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

export default function SideBar() {
  return (
    <div className='sidebar'>
     <SidebarRow selected Icon={HomeSharpIcon} title="Home"/>
     <SidebarRow Icon={WhatshotSharpIcon } title="Treding"/>
     <SidebarRow Icon={SubscriptionsSharpIcon}title="Subscription"/>
     <hr/>
     <SidebarRow Icon={LibraryAddSharpIcon} title="Library"/>
     <SidebarRow Icon={HistorySharpIcon} title="History"/>
     <SidebarRow Icon={VideocamSharpIcon} title="Your Videos"/>

     <SidebarRow Icon={WatchLaterSharpIcon} title="Watch later"/>
     <SidebarRow Icon={ThumbUpSharpIcon} title="Liked Videos"/>
     <SidebarRow Icon={ExpandMoreSharpIcon} title="show More"/>
     <hr/>


    </div>
  )
}
