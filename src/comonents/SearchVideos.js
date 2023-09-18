import React from "react";
import VideoCard from "./VideoCard";
import ChannelRow from "./ChannelRow";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import { Avatar } from "@mui/material";
import "./SearchVideos.css";

function SearchVideos() {
  return (
    <div className="searchVideos">
      <div className="searchVideos__filter">
        <TuneSharpIcon />
        <h4>filter</h4>
      </div>
      <hr />
      <ChannelRow
        image=" https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg= "
        Channel="Coding Ninja"
        verified
        subs="630K"
        noOfVideos={372}
        description="you are find awesome React.js beginner videos.Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures."
      />
      {/* <div className="channel__row">
        <h1>channel info</h1>

        <Avatar src="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg= " />
      </div> */}
      <hr/>
      <h4> latest from coding ninja</h4>
      
      <div className="searchVideos__videos">
        <VideoCard
          title="L39:Full stack Development  "
          views="2M views"
          timestamp="3 Days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
        <VideoCard
          title="L39:Full stack Development "
          views="2M views"
          timestamp="3 days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
        <VideoCard
          title="L39:Full stack Development  "
          views="2M views"
          timestamp="3 days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
        <VideoCard
          title="L39:Full stack Development  "
          views="2M views"
          timestamp="3 days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
        <VideoCard
          title="L39z:Full stack Development  "
          views="2M views"
          timestamp="3 days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
        <VideoCard
          title="L39:Full stack Development  "
          views="2M views"
          timestamp="3 days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
        <VideoCard
          title="L39:Full stack Development  "
          views="2M views"
          timestamp="3 days ago"
          channel="coding Ninja"
          image="https://media.istockphoto.com/id/1470544119/photo/female-it-specialist.jpg?s=612x612&w=is&k=20&c=w-2r7fAz759AynFGuz5BCC9_TO7h-vjzUChzLhcMavg="
        />
      </div>
    </div>
  );
}

export default SearchVideos;
