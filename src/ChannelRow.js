import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import "./ChannelRow.css";
function ChannelRow({image,Channel,description,verified,subs,noOfVideos}) {
  return <div className='channelRow'>
      <Avatar className="channelRow-logo" alt={Channel} src={image} />
      <div className="channel-text">
          <h4>{Channel} {verified && <VerifiedIcon />} </h4>
          <p>{subs} subscribers • {noOfVideos} videos </p>
          <p>
              {description}
          </p>
      </div>
  </div>;
}

export default ChannelRow;
