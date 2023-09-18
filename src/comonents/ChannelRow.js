import React from 'react'
import "./ChannelRow.css"
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { Avatar, checkboxClasses } from "@mui/material";
function ChannelRow({image,Channel,verified,noOfVideos,subs,description}) {
  return (
    <div className='channelRow'>
         <Avatar className='channelRow__logo' alt={Channel} src={image}/>
         
         <div className='channel__text'>
            <h4>{Channel}{verified &&<CheckCircleSharpIcon/>}</h4>
            <p>
                {subs} subscribers . {noOfVideos} videos
            </p>
            <p>
                {description}
            </p>
        </div>
    
    </div>
  )
}

export default ChannelRow;