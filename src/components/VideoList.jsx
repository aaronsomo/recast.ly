import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => { // was originally (), but it's good practice to use curly braces and add a return statement
  return (
  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em>{props.videos[0].id.videoId}</h5></div>
  //   <div><h5><em>videoListEntry</em>{props.videos[1].id.videoId}</h5></div>
  //   <div><h5><em>videoListEntry</em>{props.videos[2].id.videoId}</h5></div>
  //   <div><h5><em>videoListEntry</em>{props.videos[3].id.videoId}</h5></div>
  //   <div><h5><em>videoListEntry</em>{props.videos[4].id.videoId}</h5></div>
  // </div>

    <div className="video-list">
      {
        props.videos.map((video, index) => {
          return (
            <VideoListEntry video={video} key={index} entryClick={props.appClick}/>
          );
        })
      }
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
