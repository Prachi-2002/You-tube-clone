import React from 'react';
import "./Videorow.css";

function VideoRow({views,subs,description,timestamp,Channel,title,image}) {
  return <div className='videorow'>
     <img src={image} alt="" />
     <div className="video-text">
         <h3>🔴{title}</h3>
         <p className='video-headline'>
             {Channel}  •  
             <span className='subs'>
             <span className='video-subs'>{subs}    </span>
              Subscribers 
             </span>
               {views} views • {timestamp}
             
         </p>
         <p className='video-description'>
             {description}
         </p>
     </div>
  </div>;
}

export default VideoRow;
