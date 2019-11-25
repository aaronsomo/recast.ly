import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      query: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    this.setState({
      currentVideo: e
    }, () => console.log(e));
  }

  handleSearch(e) {
    this.setState({
      query: e.target.value
    }, () => console.log('input: ', this.state.query)); // console.log(e.target.value) throws error of undefined value
  }

  handleSubmit() { // forgot to bind to `this`
    // 'GET' request parameter calls for `options` object
    var options = {
      key: YOUTUBE_API_KEY, // `options` requires API_KEY
      q: this.state.query, // cannot read property 'input' of undefined; forgot to bind handleSubmit() to `this`
      max: 10

    };

    this.props.searchYouTube(options, (videos) => { // THIS.PROPS.SEARCHYOUTUBE() IS NOT A FUNCTION AHHHH; fixed it by importing searchYouTube from '../lib/searchYouTube.js' but now TypeError: cannot read property of 'undefined'
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
    // console.log(this.props.searchYouTube());
  }


  render(props) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search query={this.handleSearch} appSubmit={this.handleSubmit} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <VideoListEntry video={exampleVideoData[0]} /> video={exampleVideoData[0]} is hardcoding, we want dynamic */}
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} appClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
