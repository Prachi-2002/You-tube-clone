import React from 'react';
import "./SearchPage.css";
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
function SearchPage() {
  return <div className='searchPage'>
     <div className="searchFilter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
     </div>
     <hr></hr>
     <ChannelRow 
     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTtm75C2mjnlajaXXh5hqznGO5M19p79ZgQ&usqp=CAU"
     Channel="Prachi Madame"
     verified
     subs ="190M"
      noOfVideos={382}
      description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
/>
<hr></hr>
<VideoRow 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTtm75C2mjnlajaXXh5hqznGO5M19p79ZgQ&usqp=CAU"
Channel="Prachi Madame"
subs ="190M"
title="Awesome Video"
timestamp= "3 Years Ago"
 noOfVideos={382}
 description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
/>
<VideoRow 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTtm75C2mjnlajaXXh5hqznGO5M19p79ZgQ&usqp=CAU"
Channel="Prachi Madame"
subs ="190M"
title="Awesome Video"
timestamp= "3 Years Ago"
 noOfVideos={382}
 description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
/>
<VideoRow 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTtm75C2mjnlajaXXh5hqznGO5M19p79ZgQ&usqp=CAU"
Channel="Prachi Madame"
subs ="190M"
title="Awesome Video"
timestamp= "3 Years Ago"
 noOfVideos={382}
 description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
/>
<VideoRow 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTtm75C2mjnlajaXXh5hqznGO5M19p79ZgQ&usqp=CAU"
Channel="Prachi Madame"
subs ="190M"
title="Awesome Video"
timestamp= "3 Years Ago"
 noOfVideos={382}
 description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
/>
<VideoRow 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTtm75C2mjnlajaXXh5hqznGO5M19p79ZgQ&usqp=CAU"
Channel="Prachi Madame"
subs ="190M"
title="Awesome Video"
timestamp= "3 Years Ago"
 noOfVideos={382}
 description="You can find awesome programs here and you can find awesome programming sessions here You can learn new things here!!!"
/>
  </div>;
}

export default SearchPage;
