import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';



// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em>view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[1]}/>
//       </div>
//       <div className="col-md-5">
//         <div>
//           <VideoList videos={exampleVideoData}/>
//         </div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /*
      what do we want to change when using a click handler
      when clicking videoList items, we expect:
        videoPlayer to render new video
          new video consists of:
            link
            title
            description
        return the above
      */
      /*
     states that change, from what we can see:
      link: props.id.videoId
      title: props.snippet.title
      description: props.snippet.description
      */
      // this.setState(event.target.)
      currentVideo: this.props.exampleVideoData[0],
      videos: this.props.exampleVideoData,
      query: ''
    };
    this.onVideoListClick = this.onVideoListClick.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  onVideoListClick(event) {
    // console.log(event.target.value);
    this.setState({
      currentVideo: event
    }, console.log(event));
  }

  changeHandle(event) {
    this.setState(
      {query: event.target.value}
    );
    console.log(event.target.value);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search query={this.changeHandle}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} click={this.onVideoListClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;