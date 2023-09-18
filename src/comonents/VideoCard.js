import React from "react";
import "./VideoCard.css";
import { Avatar } from "@mui/material";

function VideoCard({ title, views, image, timestamp, channel }) {
  return (
    <div className="videocard">
      <img className="videocard__thumbnail" src={image} />

      <div className="videocard__info">
        <Avatar
        className="videocard__avatar"
        alt={channel}
         />
         <div className="videocard__text">
         <h4> {title}</h4>
         <p> {channel} </p>
         <p>{views} {timestamp}</p>
         </div>
    
        
       
      </div>
    </div>
  );
}

export default VideoCard;
